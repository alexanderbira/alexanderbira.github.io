import appStyles from "./App.module.css"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Projects from "./Projects/Projects"
import polygons from "./polygon-scatter.svg"

function App() {
  return (
    <div className={`${appStyles.app} app`} style={{ backgroundImage: `url(${polygons})` }}>
      <Profile />
      <Projects />
      <Contact />
      <div className="attributionContainer">
        <span className="attribution">
          Designed by <a href="https://github.com/alexanderbira/alexanderbira.github.io">Alex BR</a>
        </span>
      </div>
    </div>
  )
}

export default App
