import React from "react";
import { Router, Link } from "@reach/router";
import Entities from "../pages/entities";

const Routes = (
  <Router>
    <Entities path="/entities" />
  </Router>
);

export default Routes;