//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./style.scss";

//Views
import Landing from "./views/Landing";
import LoginSign from "./views/LoginSign";

//Global Context
import GlobalContext from "./GlobalConfig";

const App = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="login" element={<LoginSign />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
};

export default App;
