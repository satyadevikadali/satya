import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import RestaurantCard from "./feature/restaurant/components/RestaurantCard";

const apiRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>page not found</h1>,
    children: [
      {
        path: "/",
        element: <RestaurantCard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const RootRouterProvider = () => {
  return <RouterProvider router={apiRoutes}></RouterProvider>;
};

export default RootRouterProvider;
