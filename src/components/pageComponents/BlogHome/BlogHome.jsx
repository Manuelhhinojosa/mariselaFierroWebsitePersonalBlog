// Styles
import s from "./BlogHome.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// React Router V6
import { Link } from "react-router-dom";
//
// dependencies
// framer motion for animation
import { motion } from "framer-motion";
//
// Component
const BlogHome = (props) => {
  return (
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
        <div className={s.titleText} style={{ textDecoration: "none" }}>
          Publicaciones
        </div>
        {/* list of posts container */}
        <div className={s.listContainer}>
          {props.postState.posts.map((post) => (
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
          ))}
        </div>

        <div className={s.footer}>
          <div className={s.allPostsLinkContainer}>
            <Link className={s.postLink} to="/allposts">
              <p style={{ textDecoration: "underline" }}>
                Ver todas las publicaciones
              </p>
            </Link>
          </div>
          {props.postState.isLoggedIn ? (
            <div className={s.addContainer}>
              <Link
                className={s.postLink}
                style={{ textDecoration: "none" }}
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
