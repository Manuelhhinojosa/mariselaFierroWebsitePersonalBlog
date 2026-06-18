// Styles
import s from "./ErrorPage.module.css";
//
// Dependencies and Hooks
// React Router V6 Hooks
import { Link } from "react-router-dom";
//
// framer motion for animation
import { motion } from "framer-motion";
//
// React hooks
import { useEffect } from "react";
//
// Component funcstion
// Component funcstion
// Component funcstion
const ErrorPage = (props) => {
  // Aux functions
  // Scroll page back to top after navigating back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // return statement
  // return statement
  // return statement
  return (
    // Main container
    // Main container
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
        {/* text */}
        <h1 className={s.text}>Esta URL no existe.</h1>
        {/* home btn */}
        <Link to="/" className={s.homeButton}>
          Volver a la página de inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
