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
//
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

  //

  return (
    <div className={s.navBarContainer}>
      {/* TOP CONTAINER */}
      <div className={s.topNavBarContainer}>
        {/* HIDE BUTTON CONTAINER */}
        <div className={s.moreContainer}>
          <p className={s.p} onClick={handleNavBar}>
            {props.navBarState.showNavBar ? "Ocultar" : "Ver más"}
          </p>
        </div>
        <div
          className={s.pageMenuContainer}
          style={props.navBarState.showNavBar ? {} : { display: "none" }}
        >
          {/* ABOUT & BLOG CONTAINER */}
          <div className={s.pageMenuContainerTop}>
            <Link className={s.link} to="/about">
              <div className={s.menuItemContainer}>Acerca de</div>
            </Link>

            <Link className={s.link} to="/blogmain">
              <div className={s.menuItemContainer}>Blog</div>
            </Link>
          </div>

          {/* PROJECTS CONTAINER */}

          <div className={s.pageMenuContainerBottom}>
            <div className={s.pageMenuContainerBottom1}>
              <div>Proyectos:</div>
              <br />
              <Link className={s.link} to="/pangea">
                <div className={s.menuItemContainer}>Pangea</div>
              </Link>
              <Link className={s.link} to="/sigilio">
                <div className={s.menuItemContainer}>Sigilio</div>
              </Link>
              <Link className={s.link} to="/amanuense">
                <div className={s.menuItemContainer}>Amanuense</div>
              </Link>
              <Link className={s.link} to="/lacuerpaquesomos">
                <div className={s.menuItemContainer}>Cuerpa</div>
              </Link>
              <Link className={s.link} to="/dada">
                <div className={s.menuItemContainer}>DADA/fanzine</div>
              </Link>
              <Link className={s.link} to="/duelo">
                <div className={s.menuItemContainer}>Duelo</div>
              </Link>
              <Link className={s.link} to="/asociacion">
                <div className={s.menuItemContainer}>Asociación</div>
              </Link>
              <Link className={s.link} to="/laboratorio">
                <div className={s.menuItemContainer}>Laboratorio</div>
              </Link>
              <Link className={s.link} to="/dif">
                <div className={s.menuItemContainer}>Expreso</div>
              </Link>
              <Link className={s.link} to="/riga">
                <div className={s.menuItemContainer}>Riga</div>
              </Link>
              <Link className={s.link} to="/tardio">
                <div className={s.menuItemContainer}>Tardío</div>
              </Link>
            </div>

            {/* LOGIN/OUT BUTTON CONTAINER */}
            {props.navBarState.isLoggedIn ? (
              <div className={s.pageMenuContainerBottom2}>
                <div className={s.link} to="/login">
                  <div
                    className={s.menuItemContainer}
                    onClick={() => {
                      console.log("SUCCESS! User logged out");
                      props.navBarState.setIsLoggedIn(false);
                      props.navBarState.setShowNavBar(false);
                      toast("*** Gurps brais Marips. ***", toastStyleObject());
                      navigate("/");
                    }}
                  >
                    Salir
                  </div>
                </div>
              </div>
            ) : (
              <div className={s.pageMenuContainerBottom2}>
                <Link className={s.link} to="/login">
                  <div className={s.menuItemContainer}>Ingresar</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CONTAINER */}

      {/* CONTACT BUTTONS CONTAINER */}
      <div
        className={s.contactMenuContainer}
        style={props.navBarState.showNavBar ? {} : { display: "none" }}
      >
        {/* email icon */}
        <div className={s.contactMenuItemContainer}>
          <Link to="/contact">
            <img src={emailImg} alt="email-icon" />
          </Link>
        </div>
        {/* Linkedin icon */}
        <div className={s.contactMenuItemContainer}>
          <a
            href="https://www.linkedin.com/in/mariselalf"
            target="_blank"
            rel="noreferrer"
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
          >
            <img src={twitterImg} alt="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
