// Styles
import s from "./Project.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// dependencies
// framer motion for animation
import { motion } from "framer-motion";
// Function component
const Project = (props) => {
  // help vars
  const images = [
    props.project.imgOne,
    props.project.imgTwo,
    props.project.imgThree,
    props.project.imgFour,
    props.project.imgFive,
  ];
  return (
    // Main container
    <div
      className={s.mainProjectContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* Home button container */}
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      {/* component container */}
      <motion.div
        key={props.project.id}
        className={s.bottomContainer}
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
        {/* Main project container */}
        <div className={s.projectContainer}>
          {/* Title container */}
          <div className={s.titleContainer}>
            <p>{props.project.title}</p>
          </div>
          {/* Description container */}
          <div className={s.descContainer}>
            {props.project.id === 1 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 385)}</p>
                <p>{props.project.description.slice(386, 972)}</p>
                <p>{props.project.description.slice(973)}</p>
              </div>
            ) : null}

            {props.project.id === 2 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 141)}</p>
                <p>{props.project.description.slice(142, 434)}</p>
                <p>{props.project.description.slice(435)}</p>
              </div>
            ) : null}

            {props.project.id === 3 ? (
              <div className={s.descText}>
                <p>{props.project.description}</p>
              </div>
            ) : null}

            {props.project.id === 4 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 471)}</p>
                <p>{props.project.description.slice(472, 714)}</p>
                <p>{props.project.description.slice(715, 1048)}</p>
                <p>{props.project.description.slice(1049, 1200)}</p>
                <p>
                  Equipo:
                  <br />
                  <br />
                  Directora General: Marisela Fierro
                  <br />
                  <br />
                  Coordinador Editorial: Pedro Valderrama Villanueva
                  <br />
                  <br />
                  Corrección de textos: Diego Vázquez y Ana Lilia Larios
                  <br />
                  <br />
                  Diseño Gráfico y Edición de Imagen: Marisela L. Fierro
                  <br />
                  <br />
                  Colaborador: Víctor Villalobos
                </p>
              </div>
            ) : null}

            {props.project.id === 5 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 559)}</p>
                <p>{props.project.description.slice(560, 1023)}</p>
                <p>{props.project.description.slice(1024)}</p>
              </div>
            ) : null}

            {props.project.id === 6 ? (
              <div className={s.descText}>
                <p>{props.project.description}</p>
              </div>
            ) : null}

            {props.project.id === 7 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 320)}</p>
                <p>{props.project.description.slice(321)}</p>
              </div>
            ) : null}

            {props.project.id === 8 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 310)}</p>
                <p>{props.project.description.slice(311, 679)}</p>
                <p>{props.project.description.slice(679)}</p>
              </div>
            ) : null}

            {props.project.id === 9 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 289)}</p>

                <p>
                  Ver {props.project.description.slice(384, 396)}{" "}
                  <a href="https://www.instagram.com/reel/CuyRejAgSXS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                    aquí.
                  </a>
                </p>

                <p>{props.project.description.slice(397, 406)}</p>
                <p>{props.project.description.slice(407)}</p>
              </div>
            ) : null}

            {props.project.id === 10 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 304)}</p>
                <p>{props.project.description.slice(305, 642)}</p>
                <p>{props.project.description.slice(643)}</p>
                <p>
                  <a target="#" href="https://shopriga.netlify.app">
                    visita RIGA
                  </a>
                </p>
              </div>
            ) : null}

            {props.project.id === 11 ? (
              <div className={s.descText}>
                <p>{props.project.description.slice(0, 630)}</p>
                <p>{props.project.description.slice(631, 1145)}</p>
                <p>{props.project.description.slice(1146, 1532)}</p>
                <p>{props.project.description.slice(1533)}</p>
              </div>
            ) : null}
          </div>
          {/* Images container */}
          <div className={s.imagesContainer}>
            {images.map(
              (img, index) =>
                img && (
                  <motion.div
                    key={index}
                    className={s.imageContainer}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
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
                    <img
                      className={s.image}
                      src={img}
                      alt={`project-${index + 1}`}
                    />
                  </motion.div>
                )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
