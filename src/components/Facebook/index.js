import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from "styled-components";

const Navigation = () => {
  return (
    <div>
      <NavBar>{/* <Link to="/#22">#22</Link> */}</NavBar>
      <Router>
        <div>{/* <Route exect path="/#22" component={$22} /> */}</div>
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
