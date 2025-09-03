import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import router from "./router/router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <ScrollRestoration />
  </RouterProvider>
);
