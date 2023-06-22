import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import AllToys from "../AllToys/AllToys";
// import AddToy from "../SinglePage/SinglePage";
import MyToys from "../MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import SingleRoute from "../SingleRoute/SingleRoute";
import SingleDetails from "../SingleDetails/SingleDetails";
import SinglePage from "../SinglePage/SinglePage";
// import AddToys from "../AddToys/AddToys";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../AddToys/AddToys";
import UpdateToys from "../UpdateToys/UpdateToys";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://assignment-num-11-server.vercel.app/addToys"),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "myToy",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/singleRoute",
        element: <SingleRoute></SingleRoute>,
      },
      {
        path: "/singlePage/:id",
        element: (
          <PrivateRoute>
            <SinglePage></SinglePage>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-num-11-server.vercel.app/addToys/${params.id}`
          ),
      },
      {
        path: "singleDetails/:id",
        element: (
          <PrivateRoute>
            <SingleDetails></SingleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-num-11-server.vercel.app/singleRoute/${params.id}`
          ),
      },
      {
        path: "updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-num-11-server.vercel.app/addToys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
