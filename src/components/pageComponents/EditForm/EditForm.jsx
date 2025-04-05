// Styles
import s from "./EditForm.module.css";
// General cmponents
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// React router V6
import { useLocation, useNavigate } from "react-router-dom";
// React hooks
import { useState, useRef } from "react";
// Axios
import axios from "axios";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//
// Component function
const EditForm = (props) => {
  const location = useLocation();
  const post = location.state;
  // // State to edit a post
  const [title, setTitle] = useState(post.title);
  const [descriptionPost, setDescriptionPost] = useState(post.description);
  // // State for form references
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  // Navigate hook for redericting
  const navigate = useNavigate();
  // // Handle edit function
  const handleEdit = (e) => {
    // Prevent default brownser bevaier
    e.preventDefault();
    // Form filling error handling
    if (titleRef.current.value === "" || descriptionRef.current.value === "") {
      titleRef.current.focus();
      toast(
        "*** Título y Desripción son campos obligatorios ***",
        toastStyleObject
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
        axios.get(getAllPostsUrl).then((response) => {
          const allPostsAfterEditing = response.data;
          props.verificationState.setPosts(allPostsAfterEditing.reverse());
        });
        navigate(`/${post.reference}`);
        toast("*** Publicación editada ***", toastStyleObject);
      })
      // Error handing
      .catch((error) => {
        console.log("this is the error", error);
        toast(
          "*** Publicación no puede ser editada en este momento. Intenta más tarde ***",
          toastStyleObject
        );
      });
  };
  // Cancel edit function
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(`/${post.reference}`);
  };

  return (
    // Main container
    <div className={s.editFormContainer}>
      {/* Home button container */}
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Page container */}
      <div className={s.bottom}>
        {/* Edit form container */}
        <div className={s.formContainer}>
          <form className={s.form}>
            <input
              type="text"
              placeholder={`${post.title} (Título (Campo obligatorio))`}
              name="title"
              autocomplete="off"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              ref={titleRef}
            />
            {/* if post is teset container */}
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
            {/* Vf post is video */}
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
            <button onClick={handleEdit}>Editar publicación</button>
            {/* Cancel eddit button container */}
            <button onClick={handleCancel}>Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
