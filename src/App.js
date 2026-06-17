// Styles
import s from "./App.module.css";
//
// React Router V6 Hooks
import { Routes, Route } from "react-router-dom";
//
// Dependencies
// Axios for API calls
import axios from "axios";
//
// Toastify for handling errors
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
// Components
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
//
// React Hooks
import { useState, useEffect } from "react";
//
// State
// Projects state for Project Component
import { projectsData } from "./projectsData";
// Tostify style object
import { toastStyleObject } from "./toastStyle";
//
// App coponent (Main component)
// App coponent (Main component)
// App coponent (Main component)
function App() {
  //
  // Determines if user is using sm or lg screen
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //
  // state
  // controls Navbar
  const [showNavBar, setShowNavBar] = useState(false);
  //
  const [showText, setShowText] = useState(false);
  // Is user loggied in / out
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Is there an user
  const [user, setUser] = useState("");
  // Controls blog posts state
  const [posts, setPosts] = useState([]);
  //
  // Aux variables
  // API URL
  const getAllPostsUrl = process.env.REACT_APP_DATABASE_URL;

  // Axios call loads posts from API
  // Axios call loads posts from API
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
  //
  // PROPS
  // PROPS
  // PROPS
  //
  // NavBar props
  const navBarState = {
    showNavBar,
    setShowNavBar,
    isLoggedIn,
    setIsLoggedIn,
    isMobile,
    setIsMobile,
  };
  //
  // mobile state props
  const mobileState = {
    isMobile,
    setIsMobile,
    showNavBar,
    setShowNavBar,
  };
  //
  // Blog props
  const verificationState = {
    isLoggedIn,
    setIsLoggedIn,
    posts,
    setPosts,
    showText,
    setShowText,
  };
  //
  // Form props
  const userState = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    posts,
    setPosts,
  };
  //
  // BlogHome props
  // Single post props
  const postState = {
    posts,
    setPosts,
    isLoggedIn,
    showText,
    setShowText,
  };
  //
  // return statement
  // return statement
  // return statement
  return (
    //
    // App main container
    <div className={s.appContainer}>
      {/* Tostify notification component */}
      <ToastContainer />

      {/* NavBar */}
      {showText ? "" : <NavBar navBarState={navBarState} />}

      {/* Page components */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home mobileState={mobileState} />} />
        {/* About */}
        <Route path="/about" element={<About mobileState={mobileState} />} />
        {/* BlogHome */}
        <Route
          path="/blogmain"
          element={<BlogHome postState={postState} mobileState={mobileState} />}
        />
        {/* Project */}
        {projectsData.map((project) => (
          <Route
            key={project._id}
            path={project.path}
            element={<Project project={project} mobileState={mobileState} />}
          />
        ))}
        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact mobileState={mobileState} />}
        />
        {/* Login */}
        <Route
          path="/login"
          element={<Login userState={userState} mobileState={mobileState} />}
        />
        {/* Blog */}
        <Route
          path="/allposts"
          element={
            <Blog
              verificationState={verificationState}
              mobileState={mobileState}
            />
          }
        />
        {/* SinglePost */}
        {posts.map((post) => (
          <Route
            key={post._id}
            path={`/${post.reference}`}
            element={
              <SinglePost
                postState={postState}
                mobileState={mobileState}
                verificationState={verificationState}
              />
            }
          />
        ))}
        {/* AddPost */}
        <Route
          path="/add"
          element={
            isLoggedIn ? (
              <Form userState={userState} mobileState={mobileState} />
            ) : (
              <Login userState={userState} mobileState={mobileState} />
            )
          }
        />
        {/* EditPost */}
        <Route
          path="/edit"
          element={
            isLoggedIn ? (
              <EditForm
                verificationState={verificationState}
                mobileState={mobileState}
              />
            ) : (
              <Login userState={userState} mobileState={mobileState} />
            )
          }
        />
        {/* ErrorPage */}
        <Route path="*" element={<ErrorPage mobileState={mobileState} />} />
      </Routes>
    </div>
  );
}

export default App;
