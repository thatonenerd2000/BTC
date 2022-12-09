import React from "react";

//Context
export const ConfigContext = React.createContext();

const GlobalContext = (props) => {
  //Chane it to 8000 for dev and 8080 for prod
  const [port, setPort] = React.useState("8000");
  const [host, setHost] = React.useState(`http://localhost:${port}`);
  return (
    <ConfigContext.Provider
      value={{
        host: host,
        port: port,
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default GlobalContext;
