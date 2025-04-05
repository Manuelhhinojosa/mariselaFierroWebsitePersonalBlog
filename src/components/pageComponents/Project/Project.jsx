// Styles
import s from "./Project.module.css";
// General components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
//
// Function component
const Project = (props) => {
  return (
    // Main container
    <div className={s.mainProjectContainer}>
      {/* Home button container */}
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      {/* component container */}
      <div className={s.bottomContainer}>
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
                <p>{props.project.description}</p>
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
          </div>
          {/* Images container */}
          <div className={s.imagesContainer}>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgOne}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgTwo}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgThree}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgFour}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgFive}
                alt="projectImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
