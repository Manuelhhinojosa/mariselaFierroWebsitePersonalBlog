// Styles
import s from "./BlogHome.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// React Router V6
import { Link } from "react-router-dom";
//
// Component
const BlogHome = (props) => {
  return (
    // Main container
    <div className={s.blogHomeContainer}>
      {/* Home button container */}
      <div className={s.top}>
        <HomeButton />
      </div>
      {/* Page container */}
      <div className={s.bottom}>
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
                *** {post.title} Del 20{post.createdAt.slice(2, 10)} ***
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
      </div>
    </div>
  );
};

export default BlogHome;
