import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 300px auto;
  border-color: LightSeaGreen;
`;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAuthenticated, loading, signup } = useAuth();
  const onSubmit = (dataForm) => signup(dataForm);

  if (loading)
    return (
      <ClipLoader
        color="LightSeaGreen"
        loading={loading}
        css={override}
        size={100}
      />
    );
  if (isAuthenticated) return <Navigate to="/protected" />;
  return (
    <div className="register register-form-bunny-container">
      <form className="register-form-bunny" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label create-bunny-label">
            Vorname
          </label>
          <input
            className={
              errors.first_name
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <div className="invalid-feedback center-text">
              Bitte Nachname eintragen
            </div>
          )}
        </div>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label create-bunny-label">
            Nachname
          </label>
          <input
            className={
              errors.last_name
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("last_name", { required: true })}
          />
          {errors.last_name && (
            <div className="invalid-feedback center-text">
              Bitte Vorname eintragen
            </div>
          )}
        </div>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label create-bunny-label">
            Benutzername
          </label>
          <input
            className={
              errors.username
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("username", { required: true })}
          />
          {errors.username && (
            <div className="invalid-feedback center-text">
              Bitte Benutzername eintragen
            </div>
          )}
        </div>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label create-bunny-label">
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
          <label htmlFor="name" className="form-label create-bunny-label">
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
          {errors.email && (
            <div className="invalid-feedback center-text">
              Bitte Password eintragen
            </div>
          )}
        </div>
        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label create-bunny-label">
            Tierheim
          </label>
          <input
            className={
              errors.shelter_name
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input"
            }
            {...register("shelter_name", { required: true })}
          />
          {errors.shelter_name && (
            <div className="invalid-feedback center-text">
              Bitte Tierheim eintragen
            </div>
          )}
        </div>
        <div>
          <small>
            Sie haben bereits einen Account?{" "}
            <Link className="highlight-link" to="/login">
              Login
            </Link>
          </small>
        </div>
        <button type="submit" className="sbmt-btn login-btn-bunny btn-effect">
          Registrieren
        </button>
      </form>
    </div>
  );
};

export default Register;
