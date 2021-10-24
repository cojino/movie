import React, { useContext } from "react";
import "./Home.css";
import Header from "../Header/Header";
import MangasList from "../MangaList/MangasList";
import { MangaContext } from "../MangaCont";

const Home = () => {
  const [manga, setManga] = useContext(MangaContext);
  return (
    <>
      <div>
        <Header></Header>
        <main>
          <div className="first-row">
            {manga.map((m) => (
              <MangasList m={m} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
