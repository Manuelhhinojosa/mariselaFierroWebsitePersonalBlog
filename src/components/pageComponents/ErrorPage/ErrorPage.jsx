// Styles
import s from "./ErrorPage.module.css";
// React Router
import { Link } from "react-router-dom";
// Dependencies:
// framer motion for animation
import { motion } from "framer-motion";
//
// Component
const ErrorPage = (props) => {
  return (
    // Main container
    <div
      className={s.errorPageContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      <motion.div
        key={
          props.mobileState.isMobile
            ? props.mobileState.showNavBar
              ? "navbar-open"
              : "navbar-closed"
            : "desktop"
        }
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.5,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className={s.text}>Esta URL no existe.</h1>
        <Link to="/" className={s.homeButton}>
          Volver a la página de inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
