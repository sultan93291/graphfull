import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import ProjectPage from "../pages/ProjectPage";
import Work from "../pages/Work";
import AboutUs from "../pages/AboutUs";
import Testimonial from "../pages/Testimonial";
import IndustryPage from "../pages/IndustryPage";
import ContactUs from "./../pages/ContactUs";
import Service from "../pages/ServicePages/Service";
import BrandingService from "@/pages/ServicePages/BrandingService";
import EmailMarketing from "@/pages/ServicePages/EmailMarketing";
import CreativeService from "@/pages/ServicePages/CreativeService";
import WebDesign from "@/pages/ServicePages/WebDesign";
import LpsService from "@/pages/ServicePages/LpsService";
import PrintService from "@/pages/ServicePages/PrintService";
import VideoService from "@/pages/ServicePages/VideoService";
import UiuxDesign from "@/pages/ServicePages/UiuxDesign";
import Presentations from "@/pages/ServicePages/Presentations";

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
      {
        path: "/industry",
        element: <IndustryPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/service",
        children: [
          {
            index: true,
            element: <Service />, 
          },
          {
            path: "branding",
            element: <BrandingService />,
          },
          {
            path: "email-marketing",
            element: <EmailMarketing />,
          },
          {
            path: "social-creative",
            element: <CreativeService />,
          },
          {
            path: "web-design",
            element: <WebDesign />,
          },
          {
            path: "landing-pages",
            element: <LpsService />,
          },
          {
            path: "print-packaging",
            element: <PrintService />,
          },
          {
            path: "video-production",
            element: <VideoService />,
          },
          {
            path: "ui-ux",
            element: <UiuxDesign />,
          },
          {
            path: "presentations",
            element: <Presentations />,
          },
        ],
      },
    ],
  },
]);

export default router;
