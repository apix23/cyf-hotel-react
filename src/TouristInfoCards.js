import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  const imgGlasgow =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdHB8gtvYWAvaJsGddKm9Szeug-1ggVzKdqEtFQb6Yk8Bkke2W&usqp=CAU";
  const imgManchester =
    "https://www.turismoviajar.com/wp-content/uploads/2019/10/Manchester-2020.jpg";
  const imgLondon =
    "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide.jpg";
  return (
    <div className="card-container">
      <Card
        website="https://peoplemakeglasgow.com"
        name="Glasgow"
        alt=""
        image={imgGlasgow}
      />
      <Card
        website="https://visitmanchester.com"
        name="Manchester"
        alt=""
        image={imgManchester}
      />
      <Card
        website="https://visitlondon.com"
        name="London"
        alt=""
        image={imgLondon}
      />
    </div>
  );
};

export default TouristInfoCards;
