import React from "react";
import cover from "../../assets/cover.png";
import james from "../../assets/james.jpg";
import logo from "../../assets/kindpng_76242.png";
const CustomerReview = () => {
  return (
    <div className="mt-5 my-5">
      <footer className="footer items-center p-4 bg-secondary text-white mt-14 my-14">
        <div className="items-center mx-auto text-2xl flex">
          <img className="w-10 lg:w-28" src={logo} alt="" />
          <p>Also Search Here</p>
          <div className="grid lg:grid-cols-2 gap-5">
            <input className="text-center" type="text" name="" id="" />
            <button className="btn btn-error w-1/4">Search</button>
          </div>
        </div>
      </footer>
      <h1 className="text-center mt-14 my-14 text-3xl font-bold">
        Happy <span className="text-orange-600">Customer says</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 my-20">
        <div className="card w-96 bg-secondary text-white shadow-xl">
          <figure className="px-10 pt-10">
            <img src={cover} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body  items-center text-center">
            <h2 className="card-title">Sandy</h2>
            <p>Really very Good Product Highly Recomended</p>
          </div>
        </div>
        <div className="card bg-secondary text-white w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={cover} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Samatha</h2>
            <p>Good Product</p>
          </div>
        </div>
        <div className="card bg-secondary  text-white w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={james} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">James</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              impedit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
