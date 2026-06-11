// Styles
import s from "./About.module.css";
// Images
import aboutImg from "../../../images/aboutPage/aboutImg.png";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// dependencies
// framer motion for animation
import { motion } from "framer-motion";
// Component
const About = (props) => {
  return (
    //  Main container
    <div
      className={s.aboutPageContainer}
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
      <div className={s.bottom}>
        {/* Text & Img container */}
        <motion.div
          className={s.aboutContainer}
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
          {/* Text container */}
          <motion.div
            className={s.aboutTextContainer}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
            }}
          >
            <p className={s.text}>
              <p className={s.name}> Marisela Fierro</p>
              Soy artista visual, docente e investigadora novel con interés por
              el estudio de la creatividad en procesos educativos y artísticos
              contemporáneos. Tengo formación en Artes Visuales por la
              Universidad de Guadalajara (UdeG), Maestría en Educación y
              Expresión para las Artes y Maestría en Psicología Educativa por la
              misma institución. Trabajo como docente en la Prepa ITESO, en la
              Escuela Preparatoria 7 y en la Maestría en Educación y Expresión
              para las Artes. Tengo experiencia en el diseño de asignaturas
              relacionadas con el arte, así como en proyectos de mediación
              artística y arte colaborativo. Imparto cursos, talleres, asesorías
              y charlas a profesores y estudiantes de arte en varias
              instituciones.
              <br />
              <br />
              <br />
              <br />
              Como creadora experimento con dibujo, fotografía técnicas mixtas,
              objetos, texto y animación. En mis obras, indago en temas
              autobiográficos, relaciones interpersonales, procesos educativos y
              en algunas ciencias como la geografía y la psicología, generando
              conexiones por medio de la yuxtaposición de conceptos codificados.
              He participado en exposiciones colectivas en Guadalajara,
              Guanajuato y los Ángeles y en diversas publicaciones editoriales
              independientes y de instituciones como el Museo de Arte de Zapopan
              o la UdeG.
              <br />
              <br />
              <br />
              Líneas de investigación: Arte contemporáneo, Educación artística,
              Mediación artística, Género e inclusión.
              <br />
              <br />
              <br />
              {/* CV link */}
              <a
                href="https://mariselafierrocv.netlify.app/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Descargar mi CV
              </a>
            </p>
          </motion.div>
          {/* Image container */}
          <motion.div
            className={s.aboutImgContainer}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
            }}
          >
            <img className={s.aboutImg} src={aboutImg} alt="about" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
