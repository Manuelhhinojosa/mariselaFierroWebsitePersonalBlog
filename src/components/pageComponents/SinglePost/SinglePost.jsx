// Styles
import s from "./singlePost.module.css";
//
// Dependencies and Hooks:
// framer motion for animation
import { motion } from "framer-motion";
//
// React Router V6 hooks
import { Link, useLocation, useNavigate } from "react-router-dom";
//
// Axios
import axios from "axios";
//
// React hooks
import { useState, useEffect } from "react";
//
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyleObject } from "../../../toastStyle";
//
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// Function Component
// Function Component
// Function Component
export const SinglePost = (props) => {
  // Aux functions
  // Scroll page back to top after navigating back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // Hooks
  // React v6
  const navigate = useNavigate();
  //
  // aux vars
  // to locate the post id
  let location = useLocation();
  //
  // API url
  const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;
  //
  // ID
  let reference = location.pathname.slice(1);
  //
  // State
  // POST
  let post = {};
  //
  // Selecting sigle post
  props.postState.posts.forEach((p) => {
    if (p.reference === reference) {
      post = p;
      return;
    }
  });
  //
  // handles dispplaying post's long descriptions
  const showLongDesc = () => {
    props.postState.setShowText(!props.postState.showText);
  };
  //
  // Aux Functions
  // Function that handles imgae to be displayed
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, post.media.length - 1));
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
      // single post container
      // single post container
      // single post container
      className={s.siglePostContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* long text container */}
      {/* long text container */}
      {/* long text container */}
      {props.verificationState.showText && (
        <motion.div
          className={s.test2Container}
          style={props.postState.showText ? {} : { display: "none" }}
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* btn container */}
          {/* btn container */}
          {/* btn container */}
          <div className={s.backBtnContainer}>
            <h3 className={s.button} onClick={showLongDesc}>
              Volver
            </h3>
          </div>
          {/* long text */}
          {post.description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {/* btn container */}
          {/* btn container */}
          {/* btn container */}
          <div className={s.backBtnContainer}>
            <h3 className={s.button} onClick={showLongDesc}>
              Volver
            </h3>
          </div>
        </motion.div>
      )}

      {/* Home button container */}
      {/* Home button container */}
      {/* Home button container */}
      <motion.div
        className={s.top}
        style={props.postState.showText ? { display: "none" } : {}}
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
        {<HomeButton />}
      </motion.div>
      {/* Page container */}
      {/* Page container */}
      {/* Page container */}
      {!props.postState.showText && (
        <div
          className={s.bottom}
          style={props.postState.showText ? { opacity: "0" } : {}}
        >
          {/* Post container */}
          {/* Post container */}
          {/* Post container */}
          <motion.div
            className={s.postContainer}
            key={post._id}
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Title container */}
            {/* Title container */}
            {/* Title container */}
            <div className={s.titleContainer}>
              <p>{post.title}</p>
            </div>

            {/* Date container */}
            {/* Date container */}
            {/* Date container */}
            <div className={s.dateContainer}>
              <p> {post.createdAt.slice(0, 10)}</p>
            </div>
            {/* if post is text  */}
            {post.text ? (
              // Text container
              // Text container
              // Text container
              <div className={s.textContainer}>
                <p>
                  {post.text.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </p>
              </div>
            ) : null}
            {/* end if post is text */}

            {/* if post is video */}
            {post.video ? (
              // Video container
              // Video container
              // Video container
              <div className={s.videoContainer}>
                <iframe
                  title={post.reference}
                  allowFullScreen
                  src={post.video}
                  frameborder="0"
                ></iframe>
              </div>
            ) : null}
            {/* end if post is video */}

            {/* if post is  media and media is image/gif */}
            {post.media.length > 0 ? (
              // Image container
              // Image container
              // Image container
              <div className={s.imgContainer}>
                {/* Media post with one image */}
                <motion.img
                  key={index}
                  src={post.media[index].url}
                  alt="imgePost"
                  initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(20px)",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                />

                {/* Media post with more than 1 image */}
                {post.media.length > 1 ? (
                  // btns container
                  // btns container
                  // btns container
                  <div className={s.btnsContainer}>
                    <button className={s.sliderButton} onClick={handlePrev}>
                      {`<<<`}
                    </button>

                    <div className={s.mediaAmount}>{`${index + 1} de ${
                      post.media.length
                    }`}</div>

                    <button className={s.sliderButton} onClick={handleNext}>
                      {`>>>`}
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
            {/* end if post is  media and media is image/gif */}

            {/* Descrition container */}
            {/* Descrition container */}
            {/* Descrition container */}
            <div className={s.descriptionContainer}>
              {/* Long description */}
              {post.description.length > 150 ? (
                <div>
                  {post.description
                    .slice(0, 150)
                    .split("\n")
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  ... <span onClick={showLongDesc}>ver más</span>
                </div>
              ) : (
                // short description
                `${post.description}`
              )}
            </div>
            {/* Likes container */}
            {/* Likes container */}
            {/* Likes container */}
            <div className={s.likesContainer}>
              {/* Likes button container  */}
              {/* Likes button container  */}
              {/* Likes button container  */}
              <motion.span
                className={s.likesBtnContainer}
                onClick={() => {
                  // Axios call
                  axios
                    .patch(
                      `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`
                    )
                    .then((result) => {
                      console.log(result);
                      console.log("SUCCESS! Post updated. Result:", {
                        config: result.config,
                        data: result.data,
                        status: result.status,
                        headers: result.headers,
                      });

                      axios.get(getAllPostsUrl).then((res) => {
                        console.log(res);
                        console.log(result);
                        console.log("SUCCESS! Posts loaded. Result:", {
                          config: result.config,
                          data: result.data,
                          status: result.status,
                          headers: result.headers,
                        });
                        const updatedPosts = res.data;
                        props.postState.setPosts(updatedPosts.reverse());
                      });
                      toast("*** Gracias :) ***", toastStyleObject());
                    })
                    .catch((error) => {
                      console.log("This is the error:", {
                        message: error.message,
                        stack: error.stack,
                        config: error.config,
                        response: error.response,
                      });

                      toast(
                        "*** Error! Intenta más tarde :( ***",
                        toastStyleObject()
                      );
                    });
                }}
                whileHover={{
                  scale: [1, 1.15, 1],
                }}
                whileTap={{
                  scale: [1, 1.4, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                }}
                aria-label="black heart"
              >
                🖤
              </motion.span>
              {/* Likes count container */}
              {/* Likes count container */}
              {/* Likes count container */}
              <div className={s.likesCountContainer}>
                {post.likes === 0 ? `0 Me gusta.` : null}

                {post.likes === 1 ? `${post.likes} Me gusta.` : null}

                {post.likes > 1 ? `${post.likes} Me gusta.` : null}
              </div>
            </div>
            {/* Admin options container */}
            {/* Admin options container */}
            {/* Admin options container */}
            {props.postState.isLoggedIn ? (
              <div className={s.barContainer}>
                {/* Edit btn */}
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/edit"}
                  state={post}
                >
                  <div className={s.editContainer}>Editar</div>
                </Link>
                {/* delete container */}
                {/* delete container */}
                {/* delete container */}
                <div
                  className={s.deleteContainer}
                  onClick={() => {
                    // axios call
                    axios
                      .delete(
                        `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`
                      )
                      .then((result) => {
                        axios.get(getAllPostsUrl).then((r) => {
                          console.log(result);
                          const updatedPosts2 = r.data;
                          props.postState.setPosts(updatedPosts2.reverse());
                          navigate("/allposts");
                        });
                        toast(
                          "*** Publicación eliminada :) ***",
                          toastStyleObject()
                        );
                      })
                      .catch((error) => {
                        console.log("this is the error:", error);
                        toast(
                          "*** No se puede eliminar la publicación en este instante. Intentar más tarde ***",
                          toastStyleObject()
                        );
                      });
                  }}
                >
                  Eliminar
                </div>
              </div>
            ) : null}
            {/* End admin options contianer */}

            {/* Home blog button container */}
            {/* Home blog button container */}
            {/* Home blog button container */}
            <div className={s.linkContainer}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/blogmain`}
                state={post}
              >
                <p className={s.backText}> Volver</p>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
