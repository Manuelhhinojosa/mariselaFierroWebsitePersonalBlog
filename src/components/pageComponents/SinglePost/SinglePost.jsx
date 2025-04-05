// Styles
import s from "./singlePost.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// React Router V6
import { Link, useLocation, useNavigate } from "react-router-dom";
// Axios
import axios from "axios";
// React hooks
import { useState } from "react";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyleObject } from "../../../toastStyle";
//
//
// Component
export const SinglePost = (props) => {
  // Auxiliar variables
  const navigate = useNavigate();
  let location = useLocation();
  const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;
  let reference = location.pathname.slice(1);
  let post = {};
  //
  // Selecting sigle post
  props.postState.posts.forEach((p) => {
    if (p.reference === reference) {
      post = p;
      return;
    }
  });
  // Function that handles imgae to be displayed
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, post.media.length - 1));
  };

  return (
    // Main container
    <div className={s.siglePostContainer}>
      {/* Home button container */}
      <div className={s.top}>{<HomeButton />}</div>
      {/* Page container */}
      <div className={s.bottom}>
        {/* Full post container */}
        <div className={s.postContainer}>
          {/* Title container */}
          <div className={s.titleContainer}>
            <p>{post.title}</p>
          </div>
          {/* Description container */}
          <div className={s.descriptionContainer}>
            <p>{post.description}</p>
          </div>
          {/* Date container */}
          <div className={s.dateContainer}>
            <p> {post.createdAt.slice(0, 10)}</p>
          </div>
          {/* if post is text  */}
          {post.text ? (
            // Text container
            <div className={s.textContainer}>
              <p>
                {post.text.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* end if post is text */}

          {/* if post is video */}
          {post.video ? (
            // Video container
            <div className={s.videoContainer}>
              <iframe
                title={post.reference}
                allowFullScreen
                src={post.video}
                frameborder="0"
              ></iframe>
            </div>
          ) : (
            ""
          )}
          {/* end if post is video */}

          {/* if post is  media and media is image/gif */}
          {post.media.length > 0 ? (
            // Image container
            <div className={s.imgContainer}>
              {/* Media post with one image */}
              <img src={post.media[index].url} alt="imgePost" />
              {/* Media post with more than 1 image */}
              {post.media.length > 1 ? (
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
              ) : (
                ""
              )}
            </div>
          ) : null}
          {/* end if post is  media and media is image/gif */}

          {/* Likes container */}
          <div className={s.likesContainer}>
            {/* Likes button container  */}
            <div
              className={s.likesBtnContainer}
              onClick={() => {
                axios
                  .patch(
                    `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`
                  )
                  .then((result) => {
                    axios.get(getAllPostsUrl).then((res) => {
                      console.log(result);
                      const updatedPosts = res.data;
                      props.postState.setPosts(updatedPosts.reverse());
                    });
                    toast("*** Gracias :) ***", toastStyleObject);
                  })
                  .catch((error) => {
                    console.log("this is the error:", error);
                    toast(
                      "*** Error! Intenta más tarde :( ***",
                      toastStyleObject
                    );
                  });
              }}
            >
              Me gusta
            </div>
            {/* Likes count container */}
            <div className={s.likesCountContainer}>
              {post.likes === 0 ? `0 Me gusta.` : null}

              {post.likes === 1 ? `${post.likes} Me gusta.` : null}

              {post.likes > 1 ? `${post.likes} Me gusta.` : null}
            </div>
          </div>
          {/* Admin option container */}
          {props.postState.isLoggedIn ? (
            <div className={s.barContainer}>
              <Link
                style={{ textDecoration: "none" }}
                to={"/edit"}
                state={post}
              >
                <div className={s.editContainer}>Editar</div>
              </Link>

              <div
                className={s.deleteContainer}
                onClick={() => {
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
                        toastStyleObject
                      );
                    })
                    .catch((error) => {
                      console.log("this is the error:", error);
                      toast(
                        "*** No se puede eliminar la publicación en este instante. Intentar más tarde ***",
                        toastStyleObject
                      );
                    });
                }}
              >
                Eliminar
              </div>
            </div>
          ) : (
            ""
          )}
          {/* End admin options contianer */}
          {/*  */}
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
        </div>
      </div>
    </div>
  );
};
