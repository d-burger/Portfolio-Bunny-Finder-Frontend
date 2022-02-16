import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Impressum from "./components/Impressum.jsx";
import Login from "./components/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./components/Register.jsx";
import Shelter from "./components/Shelter.jsx";
import "./styles/app.scss";
import Contact from "./components/Contact.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthState from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyShelter from "./components/MyShelter.jsx";
import Footer from "./components/Footer.jsx";
import ShelterProfilePage from "./components/ShelterProfilePage.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  //-------- USESTATE ------------------------
  const [bunnies, setBunnies] = useState([]);
  const [totalBunnies, setTotalBunnies] = useState();

  //-------- FUNCTIONS -----------------------

  //-------- RETURN ELEMENTS -----------------
  return (
    <div className="App">
      <AuthState>
        <ToastContainer />
        <div className="headline">
          <h1>Zuhause</h1>
          <h3>schenken.</h3>
        </div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bunnies={bunnies}
                setBunnies={setBunnies}
                totalBunnies={totalBunnies}
                setTotalBunnies={setTotalBunnies}
              />
            }
          />
          <Route path="/tierheime" element={<Shelter />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<ProtectedRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrieren" element={<Register />} />
          <Route path="/protected" element={<ProtectedRoute />}>
            <Route path="/protected/meintierheim" element={<MyShelter />} />
          </Route>
          <Route path="/tierheime/:id" element={<ShelterProfilePage />} />
        </Routes>
        <Footer />
      </AuthState>
    </div>
  );
};

export default App;
