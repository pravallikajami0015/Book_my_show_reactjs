import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// react-slick-css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import Moviespage from "../src/pages/Moviespage";
import Playpage from "../src/pages/Playpage";
import Contextapi from "./context/Contextapi";
import Home from "./pages/Home";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_API_KRY;
function App() {
  return (
    <>
      <Contextapi>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:id" element={<Moviespage />}></Route>
            <Route path="/play" element={<Playpage />}></Route>
          </Routes>
        </Router>
      </Contextapi>
    </>
  );
}

export default App;
