import React from "react";
import { images, titles } from "../../constants/defines";
import "./app-title.css";
export default function AppTitle() {
  return (
    <div className="app-title-container">
      <span id="title-logo">
        <img src={images.appIcon}></img>
      </span>
      <span id="title-text">{titles.appTitle}</span>
    </div>
  );
}
