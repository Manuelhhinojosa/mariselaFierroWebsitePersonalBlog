// Styles
import s from "./Blog.module.css";
// React Router V6
import { Link } from "react-router-dom";
// React hooks
import { useState } from "react";
// Dependencies:
import axios from "axios";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//
// Function component
export const Blog = (props) => {
  // Axios URL to get all posts
  const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;
  // Index to manage post's images display dinamicaly
  const [mediaIndexes, setMediaIndexes] = useState({});

  return (
    // Main container
    <div className={s.blogPageContainer}>
      {/* Top container */}
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Bottom container */}
      <div className={s.bottom}>
        {/* posts container */}
        {/*  */}
        <div className={s.postsContainer}>
          {props.verificationState.posts.map((post) => {
            const currentIndex = mediaIndexes[post._id] || 0;
            // handle prev and next image display
            const handlePrev = () => {
              setMediaIndexes((prev) => ({
                ...prev,
                [post._id]: Math.max((prev[post._id] || 0) - 1, 0),
              }));
            };

            const handleNext = () => {
              setMediaIndexes((prev) => ({
                ...prev,
                [post._id]: Math.min(
                  (prev[post._id] || 0) + 1,
                  post.media.length - 1
                ),
              }));
            };

            return (
              <div className={s.postContainer} key={post._id}>
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
                  {post.createdAt.slice(0, 10)}
                </div>
                {/* If post is text */}
                {post.text && (
                  <div className={s.textContainer}>
                    {post.text.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                )}
                {/* If post is video */}
                {post.video && (
                  <div className={s.videoContainer}>
                    <iframe
                      title={post.reference}
                      allowFullScreen
                      src={post.video}
                      frameBorder="0"
                    ></iframe>
                  </div>
                )}
                {/* If post is media */}
                {post.media.length === 1 && (
                  <div className={s.imgContainer}>
                    <img src={post.media[0].url} alt="imagePost" />
                  </div>
                )}

                {post.media.length > 1 && (
                  <div className={s.imgContainer}>
                    <img src={post.media[currentIndex].url} alt="imagePost" />

                    <div className={s.btnsContainer}>
                      <button className={s.sliderButton} onClick={handlePrev}>
                        {`<<<`}
                      </button>

                      <div className={s.mediaAmount}>
                        {`${currentIndex + 1} de ${post.media.length}`}
                      </div>

                      <button className={s.sliderButton} onClick={handleNext}>
                        {`>>>`}
                      </button>
                    </div>
                  </div>
                )}
                {/* Likes container */}
                <div className={s.likesContainer}>
                  {/* Likes button container */}
                  <div
                    className={s.btnContainer}
                    onClick={() => {
                      axios
                        .patch(
                          `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`
                        )
                        .then(() => {
                          axios.get(getAllPostsUrl).then((res) => {
                            const updatedPosts = res.data;
                            props.verificationState.setPosts(
                              updatedPosts.reverse()
                            );
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
                  {/* Likes counter container */}
                  <div className={s.likesCountContaier}>
                    {post.likes === 0 && `0 Me gusta.`}
                    {post.likes === 1 && `1 Me gusta.`}
                    {post.likes > 1 && `${post.likes} Me gusta.`}
                  </div>
                </div>
                {/* Admin option container */}
                {props.verificationState.isLoggedIn && (
                  // Edit button container
                  <div className={s.barContainer}>
                    <Link
                      style={{ textDecoration: "none" }}
                      className={s.linkContainer}
                      to="/edit"
                      state={post}
                    >
                      <div className={s.btnContainer}>Editar</div>
                    </Link>
                    {/* Delete container */}
                    <div
                      className={s.btnContainer}
                      onClick={() => {
                        axios
                          .delete(
                            `${process.env.REACT_APP_DATABASE_URL_POSTS}${post._id}`
                          )
                          .then(() => {
                            axios.get(getAllPostsUrl).then((res) => {
                              const updatedPosts2 = res.data;
                              props.verificationState.setPosts(
                                updatedPosts2.reverse()
                              );
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
