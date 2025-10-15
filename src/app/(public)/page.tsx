import React from "react";
import Hero from "./components/Hero";
import ActivitiesForTraveler from "./components/ActivitiesForTraveler";
import NewsLetter from "./components/NewsLetter";

const Page: React.FC = () => {
  return (
    <div>
      {/* Your content here */}
      <Hero></Hero>


      <ActivitiesForTraveler></ActivitiesForTraveler>




      <section className="">
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Page;
