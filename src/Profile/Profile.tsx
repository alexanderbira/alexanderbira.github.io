import React from "react";
import profileStyles from "./Profile.module.css";
import line from "./line.svg";

export default function Profile() {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight-20,
      behavior: "smooth",
    });
  }
  return (
    <div className={profileStyles.profile}>
      <h1 className={profileStyles.header}>Hi, I'm <span className={profileStyles.alex} style={{backgroundImage: `url(${line})`}}>Alex BR</span></h1>
      <p className={profileStyles.info}>
        Welcome to my little website <span className={profileStyles.wave}>👋</span>
      </p>
      <div className={profileStyles.scrollIndicator} id="scrollIndicator" onClick={scrollDown}>↓</div>
    </div>
  );
}