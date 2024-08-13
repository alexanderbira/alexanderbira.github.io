import appStyles from "./App.module.css"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Projects from "./Projects/Projects"
import polygons from "./customisation/background.svg"
import Attribution from "./Attribution/Attribution.tsx"

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
