import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Category from "../pages/Category";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      path: "/category",
      element: (
        <div>
          <Category />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
