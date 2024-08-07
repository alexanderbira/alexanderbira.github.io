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
    </div>
  )
}

export default App
