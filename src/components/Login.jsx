import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useLocation, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 300px auto;
  border-color: LightSeaGreen;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/protected";

  const { isAuthenticated, loading, signin } = useAuth();

  const onSubmit = (dataForm) => signin(dataForm);

  if (loading)
    return (
      <ClipLoader
        color="LightSeaGreen"
        loading={loading}
        css={override}
        size={100}
      />
    );
  if (isAuthenticated) return <Navigate to="/protected/meintierheim" replace />;

  return (
    <div className="register login-form-bunny-container">
      <form className="login-form-bunny" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input
            className={
              errors.email
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div className="invalid-feedback center-text">
              Bitte Email eintragen
            </div>
          )}
        </div>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label">
            Passwort
          </label>
          <input
            className={
              errors.password
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && (
            <div className="invalid-feedback center-text">
              Bitte Password eintragen
            </div>
          )}
        </div>
        <div>
          <small>
            Sie besitzen keinen Account?{" "}
            <Link className="highlight-link" to="/registrieren">
              Registrieren
            </Link>
          </small>
        </div>
        <button type="submit" className="sbmt-btn login-btn-bunny btn-effect">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
