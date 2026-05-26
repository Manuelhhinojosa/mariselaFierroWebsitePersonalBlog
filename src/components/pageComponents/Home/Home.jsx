// Styles
import s from "./Home.module.css";
//
// Dependencies
// Framer motion (for animation)
import { motion } from "framer-motion";
//
// Component
export const Home = (props) => {
  return (
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
      <motion.div
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
          duration: 1,
        }}
      >
        <h1 className={s.text} role="heading">
          Marisela Fierro
        </h1>
      </motion.div>
    </div>
  );
};
