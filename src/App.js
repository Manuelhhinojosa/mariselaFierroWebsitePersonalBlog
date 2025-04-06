// Styles
import s from "./App.module.css";
// React Router V6
import { Routes, Route } from "react-router-dom";
// Dependencies
// Axios for API calls
import axios from "axios";
// Toastify for handling errors
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Page components
import { Home } from "./components/pageComponents/Home/Home";
import ErrorPage from "./components/pageComponents/ErrorPage/ErrorPage";
import About from "./components/pageComponents/About/About";
import Contact from "./components/pageComponents/Contact/Contact";
import BlogHome from "./components/pageComponents/BlogHome/BlogHome";
import { Blog } from "./components/pageComponents/Blog/Blog";
import { Login } from "./components/pageComponents/Login/Login";
import EditForm from "./components/pageComponents/EditForm/EditForm";
import Form from "./components/pageComponents/Form/Form";
import Project from "./components/pageComponents/Project/Project";
import { SinglePost } from "./components/pageComponents/SinglePost/SinglePost";
// General components
import NavBar from "./components/generalComponents/NavBar/NavBar";
// React Hooks
import { useState, useEffect } from "react";
// Projects state (stored localy in src dir)
import { projectsData } from "./projectsData";
// error handling state (for styling)
import { toastStyleObject } from "./toastStyle";
//
//
// App coponent (Main component)
function App() {
  // NavBar state
  const [showNavBar, setShowNavBar] = useState(false);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  // Posts for blog state
  const [posts, setPosts] = useState([]);

  // API URL
  const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;

  // Axios call loads posts from API
  useEffect(() => {
    axios
      .get(getAllPostsUrl)
      .then((result) => {
        const postsFromAPI = result.data;
        setPosts(postsFromAPI.reverse());
        console.log(result);
        console.log("SUCCESS! Posts loaded. Result:", {
          config: result.config,
          data: result.data,
          status: result.status,
          headers: result.headers,
        });
      })
      .catch((error) => {
        console.log("This is the error:", {
          message: error.message,
          stack: error.stack,
          config: error.config,
          response: error.response,
        });

        toast(
          `Error con la conexión con la base de datos. Blog no disponible. Error: ${error.message} `,
          toastStyleObject()
        );
      });
  }, []);

  // NavBar props
  const navBarState = {
    showNavBar,
    setShowNavBar,
    isLoggedIn,
    setIsLoggedIn,
  };

  // Blog props
  const verificationState = {
    isLoggedIn,
    setIsLoggedIn,
    posts,
    setPosts,
  };

  // Form props
  const userState = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    posts,
    setPosts,
  };

  // BlogHome props
  // Single post props
  const postState = {
    posts,
    setPosts,
    isLoggedIn,
  };

  return (
    <div className={s.appContainer}>
      {/* General components */}
      <ToastContainer />
      <NavBar navBarState={navBarState} />
      {/* Page components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogmain" element={<BlogHome postState={postState} />} />

        {projectsData.map((project) => (
          <Route
            key={project._id}
            path={project.path}
            element={<Project project={project} />}
          />
        ))}

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login userState={userState} />} />
        <Route
          path="/allposts"
          element={<Blog verificationState={verificationState} />}
        />

        {posts.map((post) => (
          <Route
            key={post._id}
            path={`/${post.reference}`}
            element={<SinglePost postState={postState} />}
          />
        ))}

        {isLoggedIn ? (
          <Route path="/add" element={<Form userState={userState} />} />
        ) : (
          ""
        )}

        {isLoggedIn ? (
          <Route
            path="/edit"
            element={<EditForm verificationState={verificationState} />}
          />
        ) : (
          ""
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
