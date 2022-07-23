import { createContext, useState } from "react";

export const UtilContext = createContext();

const UtilContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleSetMenu = () => {
    setMenu(!menu);
  };
  return (
    <UtilContext.Provider value={{ menu, toggleSetMenu }}>
      {children}
    </UtilContext.Provider>
  );
};
export default UtilContextProvider;
