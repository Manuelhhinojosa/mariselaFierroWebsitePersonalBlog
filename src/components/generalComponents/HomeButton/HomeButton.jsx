// Styles
import s from "./HomeButton.module.css";
//
// React Router V6 Hooks
import { Link } from "react-router-dom";
//
// HomeButton Component
// HomeButton Component
// HomeButton Component
const HomeButton = () => {
  // return statement
  // return statement
  // return statement
  return (
    // Main component container
    <div className={s.home}>
      <Link className={s.homeLink} to={"/"}>
        <p className={s.buttonText}>Inicio</p>
      </Link>
    </div>
  );
};

export default HomeButton;
