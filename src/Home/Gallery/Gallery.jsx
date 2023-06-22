import React from "react";

// import logo1 from "../../assets/pexels-hasan-albari-1102360.jpg";
import logo2 from "../../assets/pexels-pixabay-35964.jpg";
// import logo3 from "../../assets/pexels-nika-benedictova-10662383.jpg";
import logo4 from "../../assets/pexels-pixabay-35619.jpg";
import logo5 from "../../assets/pexels-revac-film's&photography-552139.jpg";
import logo6 from "../../assets/pexels-suki-lee-14823948 (1).jpg";
import logo7 from "../../assets/pexels-archit-rege-574519.jpg";
// import logo8 from "../../assets/pexels-mike-bird-102984.jpg";
import logo9 from "../../assets/pexels-ionix-1648419.jpg";
const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold ">Gallery section</h1>
      <div className="  h-[30%] grid grid-cols-3  mt-10 my-10 gap-6">
        {/* <figure>
          <img className="w-full" src={logo1} alt="Shoes" />
        </figure> */}
        <figure>
          <img className="w-full" src={logo2} alt="Shoes" />
        </figure>
        {/* <figure>
          <img className="w-full" src={logo3} alt="Shoes" />
        </figure> */}
        <figure>
          <img className="w-full" src={logo4} alt="Shoes" />
        </figure>
        <figure>
          <img className="w-full" src={logo5} alt="Shoes" />
        </figure>
        <figure>
          <img className="w-full" src={logo6} alt="Shoes" />
        </figure>
        <figure>
          <img className="w-full" src={logo7} alt="Shoes" />
        </figure>
        {/* <figure>
          <img className="w-full" src={logo8} alt="Shoes" />
        </figure> */}
        <figure>
          <img className="w-full" src={logo9} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
