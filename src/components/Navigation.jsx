import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const { isAuthenticated, user, signout } = useAuth();
  return (
    <nav>
      <ul className="center">
        <Link className="nav-link" to="/">
          Startseite
        </Link>
        <Link className="nav-link" to="/tierheime">
          Tierheime
        </Link>
        <Link className="nav-link" to="/kontakt">
          Kontakt
        </Link>
        <Link className="nav-link" to="/impressum">
          Impressum
        </Link>
      </ul>
      <ul className="user">
        {isAuthenticated ? (
          <div>
            {" "}
            <Link
              className="nav-link my-shelter-link"
              to="/protected/meintierheim"
            >
              Mein Tierheim
            </Link>
            <Link className="register-btn logout" to="/" onClick={signout}>
              Abmelden
            </Link>
          </div>
        ) : (
          <div>
            {" "}
            <Link className="nav-link login-link" to="/login">
              Login
            </Link>
            <Link className="register-btn login-link" to="/registrieren">
              Registrieren
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
