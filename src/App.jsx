import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/crowdfunding/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
