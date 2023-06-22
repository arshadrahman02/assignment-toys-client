import React from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Catagory from "../Category/Category";
import Category from "../Category/Category";
import CustomerReview from "./CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
