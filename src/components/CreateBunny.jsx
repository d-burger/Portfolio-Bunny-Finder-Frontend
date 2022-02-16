import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";

const CreateBunny = () => {
  const { user } = useAuth();

  //-------- USESTATE ------------------------
  const [buttonClicked, setButtonClicked] = useState(false);

  //-------- USEEFFECT -----------------------

  //-------- FUNCTIONS -----------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const buttonHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  const { isAuthenticated, loading, signup } = useAuth();
  const onSubmit = async (dataForm) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_PATH}/api/kaninchen/hinzufuegen`,
        dataForm,

        {
          withCredentials: true,
        }
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!buttonClicked ? (
        <div className="create-bunny-btn-container">
          <button
            className="open-create-bunny-btn btn-effect"
            onClick={buttonHandler}
          >
            Neues Kaninchen
          </button>
        </div>
      ) : (
        <div className="create-bunny-container">
          <div className="btn-container-close">
            {" "}
            <button
              className="close-create-bunny-btn btn-effect"
              onClick={buttonHandler}
            >
              Schließen
            </button>
          </div>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="first-row">
              <div className="register-line">
                <label htmlFor="name" className="form-label create-bunny-label">
                  Name
                </label>
                <input
                  className={
                    errors.bunny_name
                      ? "form-control is-invalid create-bunny-input"
                      : "form-control create-bunny-input"
                  }
                  {...register("bunny_name", { required: true })}
                />
                {errors.bunny_name && (
                  <div className="invalid-feedback">
                    Bitte Nachname eintragen
                  </div>
                )}
              </div>
              <div className="register-line">
                <label htmlFor="name" className="form-label create-bunny-label">
                  Alter
                </label>
                <input
                  className={
                    errors.bunny_age
                      ? "form-control is-invalid create-bunny-input"
                      : "form-control create-bunny-input"
                  }
                  {...register("bunny_age", { required: true })}
                />
                {errors.bunny_age && (
                  <div className="invalid-feedback">
                    Bitte Benutzername eintragen
                  </div>
                )}
              </div>
              <div className="register-line">
                <label htmlFor="name" className="form-label create-bunny-label">
                  Bild
                </label>
                <input
                  className={
                    errors.bunny_image
                      ? "form-control is-invalid create-bunny-input"
                      : "form-control create-bunny-input"
                  }
                  {...register("bunny_image", { required: true })}
                />
                {errors.bunny_image && (
                  <div className="invalid-feedback">Bitte Email eintragen</div>
                )}
              </div>
            </div>
            <div className="first-row">
              <div className="register-line">
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
                  <div className="invalid-feedback">
                    Bitte Password eintragen
                  </div>
                )}
              </div>
              <div className="register-line">
                <label htmlFor="name" className="form-label create-bunny-label">
                  Postleitzahl
                </label>
                <input
                  className={
                    errors.shelter_zip
                      ? "form-control is-invalid create-bunny-input"
                      : "form-control create-bunny-input"
                  }
                  {...register("shelter_zip", { required: true })}
                />
                {errors.shelter_zip && (
                  <div className="invalid-feedback">
                    Bitte Tierheim eintragen
                  </div>
                )}
              </div>
              <div className="register-line">
                <label htmlFor="name" className="form-label create-bunny-label">
                  Adresse
                </label>
                <input
                  className={
                    errors.shelter_address
                      ? "form-control is-invalid create-bunny-input"
                      : "form-control create-bunny-input"
                  }
                  {...register("shelter_address", { required: true })}
                />
                {errors.shelter_address && (
                  <div className="invalid-feedback">
                    Bitte Tierheim eintragen
                  </div>
                )}
              </div>{" "}
            </div>

            <div className="register-line">
              <label htmlFor="name" className="form-label create-bunny-label">
                Tierheim-Link
              </label>
              <input
                className={
                  errors.shelter_link
                    ? "form-control is-invalid create-bunny-input"
                    : "form-control create-bunny-input"
                }
                {...register("shelter_link", { required: true })}
              />
              {errors.shelter_link && (
                <div className="invalid-feedback">Bitte Tierheim eintragen</div>
              )}
            </div>
            <div className="flex-container-create-bunny-btn">
              <button
                type="submit"
                className="sbmt-btn my-shelter-create-new-bunny-btn btn-effect"
              >
                Kaninchen speichern
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateBunny;
