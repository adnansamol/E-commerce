import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState();
  useEffect(() => {
    if (localStorage.getItem("buzzaar") !== undefined) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    console.log(isAuth);
  }, []);
  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
