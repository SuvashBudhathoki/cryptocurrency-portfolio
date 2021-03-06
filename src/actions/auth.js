import { firebase, googleAuthProvider, auth } from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogin = () => {
  return () => {
    return auth.signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return auth.signOut();
  };
};
