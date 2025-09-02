import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import ProjectPage from "../pages/ProjectPage";
import Work from "../pages/Work";
import AboutUs from "../pages/AboutUs";
import Testimonial from "../pages/Testimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
    ],
  },
]);

export default router;
