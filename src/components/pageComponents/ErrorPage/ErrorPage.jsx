// Styles
import s from "./ErrorPage.module.css";
// React Router
import { Link } from "react-router-dom";
//
// Component
const ErrorPage = () => {
  return (
    // Main container
    <div className={s.errorPageContainer}>
      <div>
        <h1 className={s.text}>Esta URL no existe.</h1>
        <Link to="/" className={s.homeButton}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
