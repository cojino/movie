import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MangaDisc from "./components/MangaDisc/MangaDisc";
import "./App.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { MangaProvider } from "./components/MangaCont";

function App() {
  return (
    <MangaProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/manga/:id" component={MangaDisc} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </MangaProvider>
  );
}

export default App;
