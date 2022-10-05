import React from "react";
import Home from "../routes/home";
import Category from "../routes/category";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "../routes/restaurantList";
import ErrorPage from "../routes/error";
import LogInPage from "../routes/log-in-page";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home />
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/category",
      element: (
        <div>
          <Category />
        </div>
      ),
    },
    {
      path: "category/:categoryName",
      element: (
        <div>
          <RestaurantList />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <LogInPage />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
