import React, { useContext } from "react";
import logo from "../../assets/kindpng_76242.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then({})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-secondary text-white font-bold ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 bg-fuchsia-300 text-black p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allToys">All Toy's</Link>
            </li>
            <li>
              <Link to="/addToys">Add Toy's</Link>
            </li>
            <li>
              <Link to="/myToy">My Toys</Link>
            </li>

            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="lg:flex">
            <img className="lg:w-1/3 w-full" src={logo} alt="" />
            <a className="btn btn-ghost normal-case text-xl lg:mt-3">
              Mad Toy's
            </a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toy's</Link>
          </li>
          <li>
            <Link to="/addToys">Add Toy</Link>
          </li>
          <li>
            <Link to="/myToy">My Toy's</Link>
          </li>

          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mx-8">
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-error">
              LogOUt
            </button>

            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn  btn-error">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
