import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import CategoryPage from "../pages/category/CategoryPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:category", element: <CategoryPage/>}
    ],
  },
]);

export default router;