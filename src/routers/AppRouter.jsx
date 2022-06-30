import { Basket } from 'components/basket';
import { Footer, Navigation } from 'components/common';
import * as ROUTES from 'constants/routes';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import * as view from 'views';

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Switch>
        <Route
          component={view.Shop}
          exact
          path={ROUTES.SHOP}
        />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
