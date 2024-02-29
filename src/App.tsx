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
import { theme } from "theme/theme";

function App() {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const { width } = useWindowSize();
  return (
    <div
      className="App"
      style={{
        backgroundColor:
          mode === "light"
            ? theme.light.backgroundColor.primary
            : theme.dark.backgroundColor.primary,
        backgroundImage: `url("${
          width < 768
            ? mode === "light"
              ? mblightBgImg
              : mbdarkBgImg
            : mode === "light"
            ? lightBgImg
            : darkBgImg
        }"`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        transition: "all 0.3s ease-in",
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
