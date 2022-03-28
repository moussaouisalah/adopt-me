import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { StrictMode, useState } from "react";

import ThemeContext from "./ThemeContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
