//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./style.scss";

//Views
import Landing from "./views/Landing";
import LoginSign from "./views/LoginSign";
import Dashboard from "./views/Dashboard";

//Global Context
import GlobalContext from "./GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="login" element={<LoginSign />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
};

export default App;
