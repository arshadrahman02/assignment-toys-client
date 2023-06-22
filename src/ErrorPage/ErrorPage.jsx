import React from "react";
import { Link, useRouteError } from "react-router-dom";
import logo from "../../src/assets/Frame.jpg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className=" h-screen p-16 bg-secondary text-error ">
      <img className="w-80 h-72 mx-auto" src={logo} alt="" />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
          {error?.message}
        </p>
        <Link to="/" className="btn btn-warning">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
