import React from "react";
import { Switch, Route } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function Routes() {
  return (
    <Switch>
      <Route path="/product/:productId" component={ProductDetailsPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/" component={ProductsPage} />
    </Switch>
  );
}

export default Routes;
