import React, { useContext, useState } from "react";
import login from "../assets/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539.jpg";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/Firebase.config";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;

    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    signIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    // console.log("google mama is coming");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;

        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-2 mx-auto">
          <div className="text-center lg:text-left w-1/2">
            <img className="mt-20" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-4">
            <div className="card-body">
              <h1 className="text-center text-3xl font-bold my-10">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
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
                    value="Login"
                    className="btn bg-secondary hover:bg-error text-white font-bold"
                  />
                </div>
              </form>
              <small className="mx-auto font-semibold">
                New to Mad Toy's?
                <Link to="/signUP">
                  <span className="text-rose-500 font-bold mx-1 ">Sign UP</span>
                </Link>
              </small>
            </div>
            <div>
              <img
                onClick={handleGoogleSignIn}
                className="w-10 h-6 mx-auto my-5"
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
