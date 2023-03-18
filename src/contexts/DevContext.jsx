
import { createContext, useMemo, useState } from "react";
import axios from "axios";

export const DevContext = createContext({});

export const DevContextProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true)
   const [dataUser, setDataUser] = useState();
   const token = "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";

  const updateDataUser = (data) =>{
    setDataUser(data)
  }

  const getUserByUsername = (username) => {
    return axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  };

  const data = useMemo(() => ({updateDataUser, dataUser, getUserByUsername, isLoading, setIsLoading}), [dataUser]);

  return <DevContext.Provider value={data}>{children}</DevContext.Provider>;
};
