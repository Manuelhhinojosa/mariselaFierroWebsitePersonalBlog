// Styles
import s from "./Home.module.css";
//
// Component
export const Home = (props) => {
  return (
    // Main container
    <div
      className={s.homeCompContainer}
      style={
        props.homeState.isMobile && props.homeState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* Text container */}
      <div className={s.textContainer}>
        <h1 className={s.text} role="heading">
          Marisela Fierro
        </h1>
      </div>
    </div>
  );
};
