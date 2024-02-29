import { useSelector } from "react-redux";
import { AppState } from "type";

// Images
import lightBgImg from "images/bg-desktop-light.jpg";
import darkBgImg from "images/bg-desktop-dark.jpg";
import mblightBgImg from "images/bg-mobile-light.jpg";
import mbdarkBgImg from "images/bg-mobile-dark.jpg";
import useWindowSize from "hooks/useWindowSize";

import "styles/App.scss";

// Pages
import Todo from "pages/Todo";

function App() {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const { width } = useWindowSize();
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url"${
          width < 768
            ? mode === "light"
              ? mblightBgImg
              : mbdarkBgImg
            : mode === "light"
            ? lightBgImg
            : darkBgImg
        }"`,
      }}
    >
      {/* {width < 768 ? (
        <img
          style={{
            width: "100%",
            objectFit: "contain",
            position: "fixed",
            zIndex: -1,
          }}
          src={mode === "light" ? mblightBgImg : mbdarkBgImg}
          alt="darkBg"
        />
      ) : (
        <img
          style={{
            width: "100%",
            objectFit: "contain",
            position: "fixed",
            zIndex: -1,
          }}
          src={mode === "light" ? lightBgImg : darkBgImg}
          alt="darkBg"
        />
      )} */}
      <Todo />
    </div>
  );
}

export default App;
