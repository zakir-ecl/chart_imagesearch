import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { Charts } from "./Charts";
import { Search } from "./Search";
import { Error } from "./Error";

export const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route  path="/" component={Home} />
        <Route exact path="/Charts" component={Charts} />
        <Route exact path="/Search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
