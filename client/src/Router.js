import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ApiKeys from "./components/ApiKeys";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import SignUp from "./components/SignUp";

import { AuthProvider, useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";

const RedirectToHome = () => <Redirect to="/home" />;

function PrivateRoutes() {
  const { authenticated } = useAuth();

  if (authenticated === null) return null;
  if (authenticated === false) {
    window.location.href = `${process.env.REACT_APP_LOGIN_URL}?redirect=${window.location}`;
    return null;
  }

  return (
    <Switch>
      <Route exact path="/" component={RedirectToHome} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/api-keys" component={ApiKeys} />
      <Route path="/logout" component={LogOut} />
    </Switch>
  );
}

function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
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
