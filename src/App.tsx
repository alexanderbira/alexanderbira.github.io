import React from 'react';
import appStyles from './App.module.css';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import polygons from './polygon-scatter.svg';

function App() {
  return (
    <div className={appStyles.appWrapper}>
      <div className={appStyles.app} style={{backgroundImage: `url(${polygons})`}}>
        <Profile />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;