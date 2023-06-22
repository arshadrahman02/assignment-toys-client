import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import signUp from "../../assets/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;
    const user = { name, email, password, url };
    console.log(user);
    confirm("Successfully Sign Up ");
    navigate("/");

    createUser(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-2 mx-auto">
          <div className="text-center lg:text-left w-1/2">
            <img className="mt-20" src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-4">
            <div className="card-body">
              <h1 className="text-center text-3xl font-bold my-10">Sign UP</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter URL"
                    name="url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn bg-secondary hover:bg-error text-white font-bold"
                  />
                </div>
              </form>
              <small className="mx-auto font-semibold">
                Already Sign in ?
                <Link to="/login">
                  <span className="text-rose-500 font-bold mx-1 ">Login</span>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
