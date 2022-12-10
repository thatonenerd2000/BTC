import { useContext, useState } from "react";
import axios from "axios";

//Global Context
import { ConfigContext } from "../GlobalContext";

//componenets
import Logo from "../components/Logo";

const Dashboard = () => {
  const Globalconfig = useContext(ConfigContext);
  const [foodItems, setFoodItems] = useState("");

  return (
    <div id="DashboardPage">
      <Logo size="40px" />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Welcome {Globalconfig.comanpanyName}</h1>
      <img src={Globalconfig.image} alt="company logo" height="100px" />
      <p>{Globalconfig.comanpanyEmail}</p>
      <hr className="hr" />
      <br />
      <label>Food Items</label>
      <input type="text" placeholder="Food Items (item1, item2 ..)" />
      <br />
      <label>Distribution Date</label>
      <input type="date" />
      <br />
      <button
        onclick={(e) => {
          alert("submit");
        }}
        id="DashboardSubmit"
      >
        Submit
      </button>
    </div>
  );
};

export default Dashboard;
