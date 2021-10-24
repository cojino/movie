import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./MangaDisc.css";
import { MangaContext } from "../MangaCont";

const MangaDisc = () => {
  const [manga, setManga] = useContext(MangaContext);
  const { id } = useParams();
  return (
    <div>
      <div key={manga.id} className="container">
        <nav>
          <header>
            <div className="logo-name">
              <h2>Anime-site</h2>
              <h3>Home</h3>
            </div>
            <div>
              <button className="yelow">
                SIGN IN <i className="fas fa-sign-in-alt" />
              </button>
            </div>
          </header>
        </nav>
        <main>
          <div className="left-side">
            <div className="beast">
              <img src="#" alt="" />
            </div>
          </div>
          <div className="right_side">
            <div className="name">
              <h2>{id}</h2>
              <h4>( 6.3k )</h4>
              <i className="fas fa-star" />
              <div>
                <h2>9.5</h2>
                <h3 id="grey-10">/10</h3>
              </div>
            </div>
            <div className="discreption">
              <p>{id}</p>
              <p>Published Sep 8, 2016 to Oct 8, 2020</p>
            </div>
            <div className="category">
              <button>Drama</button>
              <button>Psychological</button>
              <button>Slice of Life</button>
              <button>Violence</button>
            </div>

            <div className="mangaka">
              <p>mangaka : Paru Itagaki</p>
            </div>
            <div>
              <button className="yelow">
                <i className="fas fa-eye" />
                watch now
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MangaDisc;
