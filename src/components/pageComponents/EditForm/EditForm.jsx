// Styles
import s from "./EditForm.module.css";
//
// Dependencies and Hooks
// React router V6 Hooks
import { useLocation, useNavigate } from "react-router-dom";
//
// React hooks
import { useState, useRef, useEffect } from "react";
//
// framer motion for animation
import { motion } from "framer-motion";
//
// Axios
import axios from "axios";
//
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
// General cmponents
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// Component function
// Component function
// Component function
const EditForm = (props) => {
  // Aux functions
  // Scroll page back to top after navigating back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // Aux variables
  //
  //  Navigate hook for redericting
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state;
  //
  // State to edit a post
  const [title, setTitle] = useState(post.title);
  const [descriptionPost, setDescriptionPost] = useState(post.description);
  //
  // State for form references
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  //
  // functions
  // Handle edit function
  // Handle edit function
  const handleEdit = (e) => {
    // Prevent default brownser bevaier
    e.preventDefault();
    // Form filling error handling
    if (titleRef.current.value === "" || descriptionRef.current.value === "") {
      titleRef.current.focus();
      toast(
        "*** Título y Desripción son campos obligatorios ***",
        toastStyleObject()
      );
      return;
    }
    // Object that will be sent in the API call with the edited state
    const formData = new FormData();
    // Setting values to FormData object
    formData.append("title", title);
    formData.append("description", descriptionPost);
    // Axios setting variables
    const editURL = `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`;
    const config = { headers: { "Content-Type": "application/json" } };
    // axios call
    axios
      .put(editURL, formData, config)
      .then((result) => {
        console.log(result);
        const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;
        console.log("SUCCESS! Post edited. Result:", {
          config: result.config,
          data: result.data,
          status: result.status,
          headers: result.headers,
        });
        axios.get(getAllPostsUrl).then((response) => {
          console.log(response);
          const allPostsAfterEditing = response.data;
          props.verificationState.setPosts(allPostsAfterEditing.reverse());
        });
        console.log("SUCCESS! Posts loaded. Result:", {
          config: result.config,
          data: result.data,
          status: result.status,
          headers: result.headers,
        });
        navigate(`/${post.reference}`);
        toast("*** Publicación editada ***", toastStyleObject());
      })
      // Error handing
      .catch((error) => {
        console.log("This is the error:", {
          message: error.message,
          stack: error.stack,
          config: error.config,
          response: error.response,
        });
        toast(
          "*** Publicación no puede ser editada en este momento. Intenta más tarde ***",
          toastStyleObject()
        );
      });
  };
  //
  // Handle edit function
  // Handle edit function
  // Cancel edit function
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(`/${post.reference}`);
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
      className={s.editFormContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* Home button container */}
      {/* Home button container */}
      {/* Home button container */}
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
      {/* Page container */}
      {/* Page container */}
      {/* Page container */}
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
        {/* Edit form container */}
        {/* Edit form container */}
        {/* Edit form container */}
        <div className={s.formContainer}>
          {/* form */}
          <form className={s.form}>
            {/* title input */}
            <input
              type="text"
              placeholder={`(Título - Campo obligatorio) ${post.title} `}
              name="title"
              autocomplete="off"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              ref={titleRef}
            />
            {/* if post is text container */}
            {post.text.length > 0 ? (
              <div className={s.textPost}>
                {post.text.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            ) : null}
            {/* If post is media */}
            {post.media.length > 0 ? (
              <div className={s.imgPost}>
                <img alt="Element to be edited" src={post.media[0].url}></img>
              </div>
            ) : null}
            {/* If post is video */}
            {post.video ? (
              <div className={s.videoPost}>
                <iframe
                  title={post.reference}
                  allowFullScreen
                  src={post.video}
                  frameborder="0"
                ></iframe>
              </div>
            ) : null}
            {/* description text area */}
            <textarea
              placeholder={`${post.description} (Descripción (Campo obligatorio))`}
              name="description"
              cols="auto"
              rows="auto"
              onChange={(e) => {
                setDescriptionPost(e.target.value);
              }}
              ref={descriptionRef}
            ></textarea>
            {/* Edit button container */}
            {/* Edit button container */}
            {/* Edit button container */}
            <button onClick={handleEdit}>Editar publicación</button>
            {/* Cancel eddit button container */}
            {/* Cancel eddit button container */}
            {/* Cancel eddit button container */}
            <button onClick={handleCancel}>Cancelar</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditForm;
