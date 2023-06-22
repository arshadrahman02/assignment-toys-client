import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[420px] mt-10 my-10 object-cover "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 h-full"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">Mad Toy's</h1>
          <p className="mb-5 text-white ">
            Welcome to "Mad Toy's" - your one-stop destination for all your toy
            car needs! We are a premier toy car shop, offering a wide range of
            miniature vehicles that are sure to excite kids and collectors
            alike.
          </p>
          <Link to="/login">
            {" "}
            <button className="btn btn-error">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
