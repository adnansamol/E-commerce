import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem("buzzaar") !== undefined) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    console.log(isAuth);
  }, []);

  const setUserProfile = (userData) => {
    setUserInfo(userData);
  };
  return (
    <UserContext.Provider
      value={{ isAuth, setIsAuth, userInfo, setUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
