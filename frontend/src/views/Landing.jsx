import { useEffect, useState } from "react";

// Compomemts
import Map from "../components/Map";
import Logo from "../components/Logo";

const Landing = () => {
  const [position, setPosition] = useState("");
  const [locations, setLocations] = useState([
    {
      name: "Wegmans",
      image: "http://edge.rit.edu/content/R12700/public/Wegmans.jpg",
      location: [42.989432, -78.8508069],
      items: ["Whole Wheat Bread", "Ice cream (Chocolate)", "1% Milk"],
    },
    {
      name: "McDonalds",
      image: "https://www.bhwt.org.uk/wp-content/uploads/2015/03/Mcdonalds_Logo.jpg",
      location: [42.9803288, -78.8256638],
      items: ["Big Mac", "French Fries", "Coke"],
    },
    {
      name: "Halal Guys",
      image: "https://www.famousfoodfestival.com/wp-content/uploads/2019/05/1-1-768x486.jpg",
      location: [42.9993829, -78.8220968],
      items: ["Chicken and Rice", "Lamb and Rice", "Falafel"],
    },
  ]);

  const locateMe = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  };

  useEffect(() => {
    locateMe();
  }, []);

  return (
    <div id="Landing">
      <div id="logoLanding">
        <Logo size="50px" />
      </div>
      <br />
      <div id="mapLanding">
        <Map mapCenter={position} markers={locations} />
      </div>
    </div>
  );
};

export default Landing;
