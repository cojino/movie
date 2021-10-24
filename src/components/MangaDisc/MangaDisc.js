import React from "react";
import "./MangaDisc.css";

const MangaDisc = () => {
  return (
    <div className="container">
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
          <div className="beast"></div>
        </div>
        <div className="right_side">
          <div className="name">
            <h2>BEASTARS</h2>
            <h4>( 6.3k )</h4>
            <i className="fas fa-star" />
            <div>
              <h2>9.5</h2>
              <h3 id="grey-10">/10</h3>
            </div>
          </div>
          <div className="discreption">
            <p>
              In a world populated by anthropomorphic animals, herbivores and
              carnivores coexist with each other. For the adolescences of
              Cherryton Academy, school life is filled with hope, romance,
              distrust, and uneasiness.The main character is Regoshi the wolf, a
              member of the drama club. Despite his menacing appearance, he has
              a very gentle heart. Throughout most of his life, he has always
              been an object of fear and hatred by other animals, and he's been
              quite accustomed to that lifestyle. But soon, he finds himself
              becoming more involved with his fellow classmates who have their
              own share of insecurities and finds his life in school changing
              slowly.
            </p>
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
  );
};

export default MangaDisc;
