// Styles
import s from "./Login.module.css";
//
// dependencies and Hooks
// framer motion for animation
import { motion } from "framer-motion";
//
// Axios
import axios from "axios";
//
// React hooks
import { useState, useRef, useEffect } from "react";
//
// React router V6 hooks
import { useNavigate } from "react-router-dom";
//
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// Function component
// Function component
// Function component
export const Login = (props) => {
  // Aux functions
  // Scroll page back to top after navigating back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // State
  // Initial state for user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = { username: username, password: password };
  // ref
  //
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  //
  // React router V^ for redirecting
  const navigate = useNavigate();
  //
  // Funcstions
  // Login handle function
  const handleSignIn = async (e) => {
    e.preventDefault();
    // API address va
    const loginURL = process.env.REACT_APP_DATABASE_URL_LOGIN;
    // Filling form error handleing
    if (usernameRef.current.value === "" || passwordRef.current.value === "") {
      usernameRef.current.focus();
      toast(
        "*** Usuario y Contraseña son campos obligatorios ***",
        toastStyleObject()
      );
      return;
    }
    // Axios call
    axios
      .post(loginURL, data)
      .then((result) => {
        console.log(result);
        console.log("SUCCESS! User loggedin. Result:", {
          config: result.config,
          data: result.data,
          status: result.status,
          headers: result.headers,
        });
        const user = result.data;
        props.userState.setUser(user._id);
        props.userState.setIsLoggedIn(true);
        toast("*** Güelcomrps la Marips ***", toastStyleObject());
        navigate("/blogmain");
      })
      // Error handleling
      .catch((error) => {
        console.log("This is the error:", {
          message: error.message,
          stack: error.stack,
          config: error.config,
          response: error.response,
        });
        toast(
          "*** Usuario y/ó Contraseńa no son conrrectos ***",
          toastStyleObject()
        );
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        usernameRef.current.focus();
      });
  };
  //
  // return statement
  // return statement
  // return statement
  return (
    // Main container
    // Main container
    // Main container
    <div
      className={s.loginPageContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* Home button container  */}
      {/* Home button container  */}
      {/* Home button container  */}
      <motion.div
        className={s.top}
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HomeButton />
      </motion.div>
      {/* Component container */}
      {/* Component container */}
      {/* Component container */}
      <motion.div
        key={
          props.mobileState.isMobile
            ? props.mobileState.showNavBar
              ? "navbar-open"
              : "navbar-closed"
            : "desktop"
        }
        className={s.bottom}
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Title container */}
        {/* Title container */}
        {/* Title container */}
        <div className={s.BlogTitleContainer}>
          Blog personal de Marisela Fierro
        </div>
        {/* Login form container */}
        {/* Login form container */}
        {/* Login form container */}
        <div className={s.loginFormContainer}>
          {/* form */}
          <form action="" className={s.loginForm}>
            {/* user input */}
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              ref={usernameRef}
            />
            {/* password input */}
            <input
              type="password"
              name="password"
              placeholder="Contaseña"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              ref={passwordRef}
            />
            {/* loggin button container */}
            {/* loggin button container */}
            {/* loggin button container */}
            <button onClick={handleSignIn}>Ingresar</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
