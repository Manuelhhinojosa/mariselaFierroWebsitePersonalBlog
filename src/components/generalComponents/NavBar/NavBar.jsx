// Styles
import s from "./NavBar.module.css";
// React Router V6
import { Link, useNavigate } from "react-router-dom";
// Contact & media buttons images imported
import emailImg from "../../../images/contactBar/email.png";
import linkedInImg from "../../../images/contactBar/linkedin.png";
import igImg from "../../../images/contactBar/ig.png";
import twitterImg from "../../../images/contactBar/twitter.png";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//framer motion for animations
import { motion, AnimatePresence, scale } from "framer-motion";
// Component
// Component
// Component
const NavBar = (props) => {
  // Router
  const navigate = useNavigate();
  // Functions:
  //
  // Handles navigation bar visibility
  const handleNavBar = () => {
    props.navBarState.setShowNavBar(!props.navBarState.showNavBar);
  };

  // return
  // return
  // return
  return (
    <div
      className={s.navBarContainer}
      style={
        props.navBarState.showNavBar
          ? { height: "95vh" }
          : { height: "fit-content" }
      }
    >
      {/* TOP CONTAINER */}
      <div className={s.topNavBarContainer}>
        {/* HIDE BUTTON CONTAINER */}
        <div className={s.moreContainer}>
          <p className={s.p} onClick={handleNavBar}>
            {props.navBarState.showNavBar ? "Ocultar" : "Ver más"}
          </p>
        </div>
        <AnimatePresence>
          {props.navBarState.showNavBar && (
            <motion.div
              className={s.pageMenuContainer}
              initial={{
                opacity: 0,
                scale: 0.7,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {/* ABOUT & BLOG CONTAINER */}
              <div className={s.pageMenuContainerTop}>
                <Link className={s.link} to="/about" onClick={handleNavBar}>
                  <div className={s.menuItemContainer}>Acerca de</div>
                </Link>

                <Link className={s.link} to="/blogmain" onClick={handleNavBar}>
                  <div className={s.menuItemContainer}>Blog</div>
                </Link>
              </div>

              {/* PROJECTS CONTAINER */}

              <div className={s.pageMenuContainerBottom}>
                <div className={s.pageMenuContainerBottom1}>
                  <div>Proyectos:</div>
                  <br />

                  <Link className={s.link} to="/tardio" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Tardío</div>
                  </Link>
                  <Link className={s.link} to="/riga" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Riga</div>
                  </Link>
                  <Link className={s.link} to="/pangea" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Pangea</div>
                  </Link>
                  <Link className={s.link} to="/sigilio" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Sigilio</div>
                  </Link>
                  <Link
                    className={s.link}
                    to="/amanuense"
                    onClick={handleNavBar}
                  >
                    <div className={s.menuItemContainer}>Amanuense</div>
                  </Link>
                  <Link
                    className={s.link}
                    to="/lacuerpaquesomos"
                    onClick={handleNavBar}
                  >
                    <div className={s.menuItemContainer}>Cuerpa</div>
                  </Link>
                  <Link className={s.link} to="/dada" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>DADA/fanzine</div>
                  </Link>
                  <Link className={s.link} to="/duelo" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Duelo</div>
                  </Link>
                  <Link
                    className={s.link}
                    to="/asociacion"
                    onClick={handleNavBar}
                  >
                    <div className={s.menuItemContainer}>Asociación</div>
                  </Link>
                  <Link
                    className={s.link}
                    to="/laboratorio"
                    onClick={handleNavBar}
                  >
                    <div className={s.menuItemContainer}>Laboratorio</div>
                  </Link>
                  <Link className={s.link} to="/dif" onClick={handleNavBar}>
                    <div className={s.menuItemContainer}>Expreso</div>
                  </Link>

                  <div>
                    <p>
                      <a target="#" href="https://shopriga.netlify.app">
                        Tienda
                      </a>
                    </p>
                  </div>
                </div>

                {/* LOGIN/OUT BUTTON CONTAINER */}
                {props.navBarState.isLoggedIn ? (
                  <div className={s.pageMenuContainerBottom2}>
                    <div className={s.link}>
                      <div
                        className={s.menuItemContainer}
                        onClick={() => {
                          console.log("SUCCESS! User logged out");
                          props.navBarState.setIsLoggedIn(false);
                          props.navBarState.setShowNavBar(false);
                          toast(
                            "*** Gurps brais Marips. ***",
                            toastStyleObject()
                          );
                          navigate("/");
                        }}
                      >
                        Salir
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.pageMenuContainerBottom2}>
                    <Link className={s.link} to="/login" onClick={handleNavBar}>
                      <div className={s.menuItemContainer}>Ingresar</div>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM CONTAINER */}

      {/* CONTACT BUTTONS CONTAINER */}

      <AnimatePresence>
        {props.navBarState.showNavBar && (
          <motion.div
            className={s.contactMenuContainer}
            initial={{
              opacity: 0,
              scale: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {/* email icon */}
            <div className={s.contactMenuItemContainer}>
              <Link to="/contact" onClick={handleNavBar}>
                <img src={emailImg} alt="email-icon" />
              </Link>
            </div>
            {/* Linkedin icon */}
            <div className={s.contactMenuItemContainer}>
              <a
                href="https://www.linkedin.com/in/mariselalf"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavBar}
              >
                <img src={linkedInImg} alt="linkedIn-icon" />
              </a>
            </div>
            {/* Intagram icon */}
            <div className={s.contactMenuItemContainer}>
              <a
                href="https://www.instagram.com/marisela_con_ese/"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavBar}
              >
                <img src={igImg} alt="ig-icon" />
              </a>
            </div>
            {/* X icon */}
            <div className={s.contactMenuItemContainer}>
              <a
                href="https://www.twitter.com/marisela_con_s"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavBar}
              >
                <img src={twitterImg} alt="twitter-icon" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
