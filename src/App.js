import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MangaDisc from "./components/MangaDisc/MangaDisc";
import Header from "./components/Header/Header";
import "./App.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <header></header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/manga/:id" component={MangaDisc} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
