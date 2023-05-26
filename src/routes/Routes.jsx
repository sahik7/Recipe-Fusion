import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Page404 from "../pages/Page404/Page404";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://b7a10-chef-recipe-hunter-server-side-sahik7-sahik7.vercel.app/")
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "recipe/:id",
        element:<PrivateRoutes><ChefRecipes/></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-sahik7-sahik7.vercel.app/recipe/${params.id}`)
      }

    ]
  }
]);


export default router;