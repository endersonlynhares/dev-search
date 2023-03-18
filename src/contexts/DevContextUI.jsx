import { createContext, useEffect, useMemo, useState } from "react";

export const DevContext = createContext({});

export const DevContextProvider = ({ children }) => {
  const [username, setUsername] = useState("octokit");
  const [userData, setUserData] = useState({});

  const updateUsername = (data) => {
    setUsername(data.username);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [username]);

  const data = useMemo(() => ({ updateUsername, userData }), []);

  return <DevContext.Provider value={data}>{children}</DevContext.Provider>;
};
