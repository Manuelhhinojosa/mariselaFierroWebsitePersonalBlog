// Styles
import s from "./Home.module.css";
//
// Dependencies and hooks
// Framer motion (for animation)
import { motion } from "framer-motion";
//
// React hooks
import { useEffect } from "react";
//
// Component function
// Component function
// Component function
export const Home = (props) => {
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
      className={s.homeCompContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* Text container */}
      {/* Text container */}
      {/* Text container */}
      <motion.div
        key={
          props.mobileState.isMobile
            ? props.mobileState.showNavBar
              ? "navbar-open"
              : "navbar-closed"
            : "desktop"
        }
        className={s.textContainer}
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
          duration: 1.5,
        }}
      >
        <h1 className={s.text} role="heading">
          Marisela Fierro
        </h1>
      </motion.div>
    </div>
  );
};
