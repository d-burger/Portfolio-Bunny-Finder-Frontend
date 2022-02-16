import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [validAccessToken, setValidAccessToken] = useState(false);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_AUTH}/accesstoken`,
          {
            withCredentials: true,
          }
        );
        setValidAccessToken(true);
        setIsAuthenticated(true);
        setUser(data.id);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    checkAccessToken();
  }, []);
  //------------- REGISTER ---------------
  const signup = async (dataForm) => {
    // console.log(dataForm);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH}/register`,
        dataForm
      );
      console.log(data);
      setUser(data.id);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };
  //------------- SIGN IN ---------------
  const signin = async (dataForm) => {
    console.log(dataForm);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH}/login`,
        dataForm,
        { withCredentials: true }
      );
      console.log(data);
      setUser(data.id);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  //------------- SIGN OUT --------------
  const signout = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_AUTH}/logout`, {
        withCredentials: true,
      });
      setValidAccessToken(false);
      setIsAuthenticated(false);
      setUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loading, signup, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
