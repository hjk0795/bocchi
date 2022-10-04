import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Category from "../pages/Category";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RestaurantList from "../pages/RestaurantList";

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
      element: <Category />
    },
    {
      path: "category/:categoryName",
      element: <RestaurantList />,
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
