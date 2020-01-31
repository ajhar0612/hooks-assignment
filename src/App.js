import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Routes from "./app/Routes";

function App() {
  return (
    <Container fixed>
      <Router>
        <Routes />
      </Router>
    </Container>
  );
}

export default App;
