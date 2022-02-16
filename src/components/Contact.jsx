import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import selfie from "../img/selfie2.jpeg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm) => console.log("Kontakt aufgenommen");

  return (
    <div className="register login-form-bunny-container contact-form-container">
      <form
        className="login-form-bunny contact-form"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <div className="contact-intro">
          <div className="intro-img-container">
            {" "}
            <img className="intro-img" src={selfie} alt="" />
          </div>

          <div className="intro-text">
            Hallo! <br /> Mein Name ist{" "}
            <span className="contact-text-color">Dominique Burger</span> . Bei
            Fragen oder Projekten können Sie gerne Kontakt zu mir aufnehmen.
          </div>
        </div>
        <div className="contact-flex-helper">
          {" "}
          <div className="register-line contact-me-flex-helper">
            <label htmlFor="name" className="form-label">
              Ihr Name
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
              <div className="invalid-feedback">Bitte Email eintragen</div>
            )}
          </div>
          <div className="register-line contact-me-flex-helper">
            <label htmlFor="name" className="form-label">
              Ihre Email-Adresse
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
              <div className="invalid-feedback">Bitte Email eintragen</div>
            )}
          </div>
        </div>

        <div className="register-line flex-helper">
          <label htmlFor="name" className="form-label">
            Nachricht
          </label>
          <input
            className={
              errors.text
                ? "form-control is-invalid create-bunny-input"
                : "form-control create-bunny-input contact-me-input"
            }
            {...register("text", { required: true })}
            type="text"
          />
          {errors.text && (
            <div className="invalid-feedback">Bitte Nachricht eintragen</div>
          )}
        </div>
        <button
          type="submit"
          className="sbmt-btn contact-me-btn btn-effect hide"
        >
          Kontakt aufnehmen
        </button>
      </form>
    </div>
  );
};

export default Contact;
