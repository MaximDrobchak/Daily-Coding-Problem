import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Problem22 from "./Problem22";

const Navigation = () => {
  return (
    <div>
      <NavBar>
        <Link to="microsoft/Problem22">#22</Link>
      </NavBar>
      <Router>
        <div>
          <Route exect path={"microsoft/Problem22"} component={Problem22} />
        </div>
      </Router>
    </div>
  );
};

const NavBar = styled.div`
  margin: 10 10 10 10;
  padding: 10 10 10 10;
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-gup: 10px;
`;

export default Navigation;
