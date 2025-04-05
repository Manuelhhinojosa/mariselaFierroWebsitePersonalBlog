// Styles
import s from "./Home.module.css";
//
// Component
export const Home = () => {
  return (
    // Main container
    <div className={s.homeCompContainer}>
      {/* Text container */}
      <div className={s.textContainer}>
        <h1 className={s.text} role="heading">
          Marisela Fierro
        </h1>
      </div>
    </div>
  );
};
