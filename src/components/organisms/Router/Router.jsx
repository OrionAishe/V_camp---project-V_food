import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@pages/home";
import BlogList from "@pages/bloglist";
import Contact from "@pages/contact";
import RecipePage from "@pages/recipepage";
import NotFoundPage from "@pages/notfoundpage";

const Router = () => {
  const Route = useRoutes([
    { path: "/home/*", element: <Home /> },
    { path: "/", element: <Home /> },
    { path: "/:Recipename", element: <RecipePage />},
    { path: "/blog", element: <BlogList />},
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return Route;
};

export default Router;
