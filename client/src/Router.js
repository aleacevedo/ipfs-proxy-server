import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApiKeys from "./components/ApiKeys";
import { Home } from "./components/Home";

import { AuthProvider, useAuth } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";

function PrivateRoutes() {
  // const { authenticated, user } = useAuth();

  // if (authenticated === null) return null;
  // if (authenticated === false) {
  //   window.location.href = `${process.env.REACT_APP_LOGIN_URL}?redirect=${window.location}`;
  //   return null;
  // }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/api-keys" component={ApiKeys} />
      <Route path="/logs/:id" />
    </Switch>
  );
}

function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/login" />
      <Route exact path="/sign-up" />
      <Route path="*" component={PrivateRoutes} />
    </Switch>
  );
}

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <PublicRoutes />
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}
