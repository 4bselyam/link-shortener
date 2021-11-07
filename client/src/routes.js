import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LinksPage, CreatePage, DetailPage, AuthPage } from "./pages";

export const useRoutes = (isAuthenticated) => {
  return isAuthenticated ? (
    <Switch>
      <Route path="/links" exact>
        <LinksPage />
      </Route>
      <Route path="/create" exact>
        <CreatePage />
      </Route>
      <Route path="/detail/:id">
        <DetailPage />
      </Route>
      <Redirect to="/create" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
