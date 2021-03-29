import React, { useContext, useEffect, useState } from "react";

import { me } from "../services/backend";

export const AuthContext = React.createContext({
  authenticated: null,
  user: null,
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ authenticated: null, user: null });
  const { authenticated } = auth;
  const signOut = () => {
    setAuth({ authenticated: false });
  };
  useEffect(() => {
    me()
      .then((r) => {
        if (r.status !== 200) {
          return setAuth({ authenticated: false });
        }
        setAuth({ authenticated: true, user: r.data, signOut });
        return null;
      })
      .catch((error) => {
        console.log(error);
        setAuth({ authenticated: false });
      });
  }, []);

  if (authenticated === null) return null;
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
