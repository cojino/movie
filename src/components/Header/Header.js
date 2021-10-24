import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {" "}
      <nav>
        <header>
          <div className="logo-name">
            <h2>Anime-site</h2>
            <h3>Home</h3>
          </div>
          <div className="search">
            <input type="text" />
            <button>
              <i className="fas fa-search" />
            </button>
          </div>
          <div>
            <button className="yelow">
              SIGN IN <i className="fas fa-sign-in-alt" />
            </button>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Header;
