// Styles
import s from "./HomeButton.module.css";
// React Router V6
import { Link } from "react-router-dom";
//
//
// Component function
const HomeButton = (props) => {
  const handleNavBar = () => {
    props.mobileState.setShowNavBar(false);
  };
  return (
    // main component container
    <div className={s.home}>
      <Link className={s.homeLink} to={"/"} onClick={handleNavBar}>
        <p className={s.buttonText}>Inicio</p>
      </Link>
    </div>
  );
};

export default HomeButton;
