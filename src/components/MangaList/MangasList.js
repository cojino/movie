import React from "react";
import "./MangasList.css";
import { Link } from "react-router-dom";

const MangasList = ({ m }) => {
  return (
    <div>
      <div className="one">
        <div className="manga_cover">
          <img src={m.img} alt="manga" />{" "}
        </div>
        <div className="disc">
          <h4>{m.name}</h4>
          <p>{m.disc}</p>
          <Link to={`/manga/${m.id}`}>
            <button className="yelow ish">
              <i className="fas fa-eye" />
              watch now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MangasList;
