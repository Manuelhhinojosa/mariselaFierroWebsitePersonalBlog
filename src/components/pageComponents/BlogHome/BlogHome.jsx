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
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Page container */}
      <motion.div
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
        <div className={s.postTitleContainer}>
          <p className={s.titleText}>Publicaciones:</p>
        </div>
        {/* list of posts container */}
        <div className={s.listContainer}>
          {props.postState.posts.map((post) => (
            <Link
              key={post.reference}
              className={s.postLink}
              to={`/${post.reference}`}
            >
              <p>
                {post.title} Del 20{post.createdAt.slice(2, 10)}
              </p>
            </Link>
          ))}
        </div>
        {/* Link to all posts container */}
        <div className={s.allPostsLinkContainer}>
          <Link className={s.postLink} to="/allposts">
            <p style={{ textDecoration: "none" }}>
              Ver todas las publicaciones
            </p>
          </Link>
        </div>
        {/* Admin options container */}
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
        ) : null}
      </motion.div>
    </div>
  );
};

export default BlogHome;
