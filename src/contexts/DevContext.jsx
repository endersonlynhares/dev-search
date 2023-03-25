import { createContext, useMemo, useState } from "react";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();


export const DevContext = createContext({});

export const DevContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(null);
  const token = process.env.REACT_APP_API_KEY;
  const [dataUser, setDataUser] = useState(null);

  const getUserByUsername = async (username) => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setDataUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.error(error);
      });
  };

  const data = useMemo(
    () => ({ dataUser, getUserByUsername, isLoading, setIsLoading }),
    [dataUser, isLoading]
  );

  return <DevContext.Provider value={data}>{children}</DevContext.Provider>;
};
