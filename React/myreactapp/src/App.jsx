import React from "react";
import "./App.css";

function App() {
  return (
    <header className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="hamburger-menu.svg"
          alt="Hamburger Menu"
        />
        <img
          className="youtube-logo"
          src="youtube-logo.svg"
          alt="YouTube Logo"
        />
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src="search.svg" alt="Search" />
          <div className="tooltip">Search</div>
        </button>

        <button className="voice-search-button">
          <img
            className="voice-search-icon"
            src="voice-search-icon.svg"
            alt="Voice Search"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>

      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="upload.svg" alt="Upload" />
          <div className="tooltip">Create</div>
        </div>
        <img
          className="youtube-apps-icon"
          src="youtube-apps.svg"
          alt="YouTube Apps"
        />
        <div className="notifications-icon-container">
          <img
            className="notifications-icon"
            src="notifications.svg"
            alt="Notifications"
          />
          <div className="notifications-count">3</div>
        </div>
        <img
          className="current-user-picture"
          src="my-channel.jpeg"
          alt="Current User"
        />
      </div>
    </header>
  );
}

export default App;