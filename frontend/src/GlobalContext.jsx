import React from "react";

//Context
export const ConfigContext = React.createContext();

const GlobalContext = (props) => {
  //Chane it to 8000 for dev and 8080 for prod
  const [port, setPort] = React.useState("8080");
  const [host, setHost] = React.useState(`http://localhost:${port}`);
  const [comanpanyName, SetComanpanyName] = React.useState("");
  const [comanpanyEmail, SetComanpanyEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [image, setImage] = React.useState("");

  return (
    <ConfigContext.Provider
      value={{
        host: host,
        port: port,
        comanpanyName: comanpanyName,
        comanpanyEmail: comanpanyEmail,
        image: image,
        username: username,
        SetComanpanyName,
        SetComanpanyEmail,
        setImage,
        setUsername,
        setPort,
        setHost,
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default GlobalContext;
