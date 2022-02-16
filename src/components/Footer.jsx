import bunnyLogo from "../img/DM-BunnyLogo-03.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright-footer">Copyright</div>
      <img className="bunny-logo-footer" src={bunnyLogo} alt="" />
    </div>
  );
};

export default Footer;
