import React, { Fragment } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Chart from "./pages/Masters/Chart";



function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Chart} />

          
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;
