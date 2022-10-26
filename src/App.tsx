import appStyles from "./App.module.css";
import Contact from "./Contact/Contact";
import polygons from "./polygon-scatter.svg";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className={appStyles.appWrapper}>
      <div
        className={appStyles.app}
        style={{ backgroundImage: `url(${polygons})` }}
      >
        <Profile />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
