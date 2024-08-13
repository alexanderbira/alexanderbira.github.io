import appStyles from "./App.module.css"
import Attribution from "./Attribution/Attribution.tsx"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Projects from "./Projects/Projects"
import polygons from "./customisation/background.svg"

function App() {
  return (
    <div className={`${appStyles.app} app`} style={{ backgroundImage: `url(${polygons})` }}>
      <Profile />
      <Projects />
      <Contact />

      {/* Attribution - please do not remove this section */}
      <Attribution />
    </div>
  )
}

export default App
