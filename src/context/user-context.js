import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("buzzaar")) {
      setIsAuth(true);
      return;
    }
    setIsAuth(false);
  }, []);

  const saveUserProfile = (data) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ isAuth, setIsAuth, user, saveUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
