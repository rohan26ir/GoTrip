import React from "react";
import Hero from "./components/Hero";
import ActivitiesForTraveler from "./components/ActivitiesForTraveler";

const Page: React.FC = () => {
  return (
    <div>
      {/* Your content here */}
      <Hero></Hero>


      <ActivitiesForTraveler></ActivitiesForTraveler>
    </div>
  );
};

export default Page;
