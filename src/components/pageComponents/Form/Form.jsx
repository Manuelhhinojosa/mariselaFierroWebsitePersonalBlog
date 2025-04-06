// Styles
import s from "./Form.module.css";
// React hooks
import { useState, useRef } from "react";
// React router V6
import { useNavigate } from "react-router-dom";
// General comoponents
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// Axios
import axios from "axios";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//
// Function component
const Form = (props) => {
  // Inital state to create post
  // State for post object to be attached to formData that will be sent in Axios call to create post
  const [title, setTitle] = useState("");
  const [textPost, setTextPost] = useState("");
  const [descriptionPost, setDescriptionPost] = useState("");
  const [mediaPost, setMediaPost] = useState([]);
  const user = props.userState.user;
  const reference = Math.floor(Math.random() * 10000000000).toString();
  const likes = 0;
  const [video, setVideo] = useState("");
  // UseRef state
  const titleRef = useRef("");
  const mediaRef = useRef(null);
  const videoRef = useRef("");
  const textRef = useRef("");
  const descriptionRef = useRef("");
  const navigate = useNavigate();
  // assigning selected files to mediaPsot var
  const handleSetMedia = (e) => {
    const files = e.target.files;
    const filesArr = Array.from(files);
    setMediaPost(filesArr);
  };
  // Function handles adding Post
  const addPost = (e) => {
    // Defualt to prevent page reloading on click
    e.preventDefault();
    // Error handling in form filling
    if (title === "" || descriptionPost === "") {
      titleRef.current.focus();
      toast(
        "*** Título y Descripción son campos obligatorios ***",
        toastStyleObject()
      );
      return;
    } else if (mediaPost.length === 0 && textPost === "" && video === "") {
      titleRef.current.focus();
      toast(
        "*** Incluye Liga para video, selecciona imagen(es) ó incluye texto ***",
        toastStyleObject()
      );
      return;
    } else if (mediaPost.length > 0 && textPost !== "" && video !== "") {
      titleRef.current.focus();
      toast(
        "*** Incluye solo una de las tres opciones ***",
        toastStyleObject()
      );
      return;
    } else if (mediaPost.length > 0 && textPost !== "" && video === "") {
      titleRef.current.focus();
      toast(
        "*** Incluye solo una de las tres opciones ***",
        toastStyleObject()
      );
      return;
    } else if (mediaPost.length > 0 && textPost === "" && video !== "") {
      titleRef.current.focus();
      toast(
        "*** Incluye solo una de las tres opciones ***",
        toastStyleObject()
      );
      return;
    } else if (video !== "" && textPost !== "") {
      toast(
        "*** Incluye solo una de las tres opciones ***",
        toastStyleObject()
      );
      return;
    }
    //
    //
    // Form data object to be sent to in axios call
    const formData = new FormData();
    formData.append("reference", reference);
    formData.append("user", user);
    formData.append("title", title);
    formData.append("text", textPost);
    formData.append("description", descriptionPost);
    formData.append("likes", likes);
    formData.append("video", video);
    mediaPost.forEach((file) => formData.append("media", file));
    // URL for axios call
    const createUrl = process.env.REACT_APP_DATABASE_URL_CREATE;
    // Axios call
    axios
      .post(createUrl, formData)
      .then((result) => {
        console.log(result);
        console.log("SUCCESS! Post added. Result:", {
          config: result.config,
          data: result.data,
          status: result.status,
          headers: result.headers,
        });
        // Reseting to initial values so app can add another post
        titleRef.current.value = "";
        mediaRef.current.value = "";
        textRef.current.value = "";
        descriptionRef.current.value = "";
        videoRef.current.value = "";
        setTitle("");
        setMediaPost([]);
        setTextPost("");
        setDescriptionPost("");
        setVideo("");
        // catching all post after the new post was added
        const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;
        // Reasigning value of posts (best practices)
        axios.get(getAllPostsUrl).then((result) => {
          console.log(result);
          console.log("SUCCESS! Posts loaded. Result:", {
            config: result.config,
            data: result.data,
            status: result.status,
            headers: result.headers,
          });
          props.userState.setPosts(result.data.reverse());
        });
        // Upons success
        navigate("/allposts");
        toast("*** Publicación agregada ***", toastStyleObject());
      })
      // Adding post error handling
      .catch((error) => {
        console.log("This is the error:", {
          message: error.message,
          stack: error.stack,
          config: error.config,
          response: error.response,
        });
        toast(
          "*** Publicación no puede ser agregada en este instante. Intenta más tarde o contacta a tu desarrollador ***",
          toastStyleObject()
        );
      });
  };
  //
  // Handle cancel creating post function
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(`/blogmain`);
  };
  //
  //
  // Component
  return (
    // Main container
    <div className={s.formPageContainer}>
      {/* Home button container */}
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Page container */}
      <div className={s.bottom}>
        {/* Form container */}
        <div className={s.formContainer}>
          <form className={s.form} encType="multipart/form-data">
            {/* Title container */}
            <input
              type="text"
              placeholder="Título (Campo obligatorio)"
              name="title"
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
            />
            {/* Description container */}
            <textarea
              placeholder="Descripción (Campo obligatorio)"
              name="description"
              cols="auto"
              rows="auto"
              onChange={(e) => setDescriptionPost(e.target.value)}
              ref={descriptionRef}
            ></textarea>
            {/* Orientation container */}
            <div className={s.directionsText}>
              *** Elige sólo uno de los siguientes campos. ***
            </div>
            {/* Video container */}
            <input
              className={s.videoInput}
              type="text"
              placeholder="Liga para video"
              name="video"
              autoComplete="off"
              onChange={(e) => setVideo(e.target.value)}
              ref={videoRef}
            />
            {/* Image container */}
            <div>
              <label htmlFor="media">Media</label>
              <input
                type="file"
                accept="image/*"
                name="media"
                autoComplete="off"
                id="media"
                multiple
                ref={mediaRef}
                onChange={(e) => handleSetMedia(e)}
              />
            </div>
            {/* Text container */}
            <textarea
              placeholder="Texto"
              name="textPost"
              cols="30"
              rows="10"
              onChange={(e) => setTextPost(e.target.value)}
              ref={textRef}
            ></textarea>
            {/* Buttons container */}
            <button onClick={addPost}>Agregar publicación</button>
            <button onClick={handleCancel}>Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
