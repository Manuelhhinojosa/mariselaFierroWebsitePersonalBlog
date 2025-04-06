// Styles
import s from "./Login.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// Axios
import axios from "axios";
// React hooks
import { useState, useRef } from "react";
// React router V6
import { useNavigate } from "react-router-dom";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//
// Function component
export const Login = (props) => {
  // Initial state for user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = { username: username, password: password };
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  // React router V^ for redirecting
  const navigate = useNavigate();
  // Login handle function
  const handleSignIn = async (e) => {
    e.preventDefault();
    // API address
    const loginURL = process.env.REACT_APP_DATABASE_URL_LOGIN;
    // Filling form error handleing
    if (usernameRef.current.value === "" || passwordRef.current.value === "") {
      usernameRef.current.focus();
      toast(
        "*** Usuario y Contraseña son campos obligatorios ***",
        toastStyleObject
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
        toast("*** Güelcomrps la Marips ***", toastStyleObject);
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
          toastStyleObject
        );
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        usernameRef.current.focus();
      });
  };

  return (
    // Main container
    <div className={s.loginPageContainer}>
      {/* Home button container  */}
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Component container */}
      <div className={s.bottom}>
        {/* Title container */}
        <div className={s.BlogTitleContainer}>
          Blog personal de Marisela Fierro
        </div>
        {/* Login form container */}
        <div className={s.loginFormContainer}>
          <form action="" className={s.loginForm}>
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
            <button onClick={handleSignIn}>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
