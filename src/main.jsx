import ReactDOM, { createRoot } from "react-dom/client";
import { Route, RouterProvider} from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import { StrictMode } from "react";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)