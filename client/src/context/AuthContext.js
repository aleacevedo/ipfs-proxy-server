import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext({
  authenticated: null,
  user: null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ authenticated: null, user: null });
  const { authenticated } = auth;
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_APOLLO_URL}/me`, {
  //     credentials: "include",
  //   })
  //     .then((r) => {
  //       if (r.status !== 200) {
  //         return setAuth({ authenticated: false });
  //       }
  //       r.json().then((user) => setAuth({ authenticated: true, user: user }));
  //       return null;
  //     })
  //     .catch(() => setAuth({ authenticated: false }));
  // }, []);

  //if (authenticated === null) return null;
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
