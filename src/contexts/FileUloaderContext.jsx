import { createContext, useState } from "react";

export const Fileuploadcontext = createContext();

export default function Filecontext({ children }) {
  const [data, setData] = useState({
    DebtRatio: "Data not available",
    CurrentRatio: "Data not available",
  });

  return (
    <Fileuploadcontext.Provider value={{ data, setData }}>
      {children}
    </Fileuploadcontext.Provider>
  );
}
