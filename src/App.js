import React from "react";
import Heading from "./Heading";

import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
const footerContainer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer array={footerContainer} />
    </div>
  );
};

export default App;

//why we import the css on the app file?
