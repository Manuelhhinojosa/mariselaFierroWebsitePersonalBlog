// Styles
import s from "./BlogHome.module.css";
//
// Dependencies
// Hooks
// React Router V6 hooks
import { Link } from "react-router-dom";
//
// react hooks
import { useEffect } from "react";
//
// framer motion for animation
import { motion } from "framer-motion";
//
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import { div } from "framer-motion/client";
// Function component
// Function component
// Function component
const BlogHome = (props) => {
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
      className={s.blogHomeContainer}
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
        {/* Title container */}
        {/* Title container */}
        {/* Title container */}
        <div className={s.titleText} style={{ textDecoration: "none" }}>
          Publicaciones
        </div>
        {/* list of posts container */}
        {/* list of posts container */}
        {/* list of posts container */}
        <div className={s.listContainer}>
          {props.postState.posts.map((post) => (
            <motion.div
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
              <Link
                key={post.reference}
                className={s.postLink}
                to={`/${post.reference}`}
              >
                <div className={s.postItem}>
                  <p className={s.postTitle}>{post.title}</p>
                  <p className={s.postDate}>20{post.createdAt.slice(2, 10)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* footer */}
        {/* footer */}
        {/* footer */}
        <div className={s.footer}>
          {/* all posts container */}
          {/* all posts container */}
          {/* all posts container */}
          <div className={s.allPostsLinkContainer}>
            <Link className={s.postLink} to="/allposts">
              <p style={{ textDecoration: "underline", color: "black" }}>
                Ver todas las publicaciones
              </p>
            </Link>
          </div>
          {/* Add post container */}
          {/* Add post container */}
          {/* Add post container */}
          {props.postState.isLoggedIn ? (
            <div className={s.addContainer}>
              <Link
                className={s.postLink}
                style={{ textDecoration: "none", color: "black" }}
                to="/add"
              >
                <p>Agregar una publicación</p>
              </Link>
            </div>
          ) : null}{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogHome;
