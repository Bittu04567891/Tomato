// AppContext.jsx
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedno, setSelectedno] = useState(1);

  return (
    <AppContext.Provider value={{ selectedno, setSelectedno }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
