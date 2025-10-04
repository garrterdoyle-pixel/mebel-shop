import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contacts.jsx";
import DiscountForm from "./components/DiscountFrom.jsx";
import Header from "./components/Header.jsx";
import Materials from "./pages/Materials.jsx";
import Catalog from "./pages/Catalog.jsx";
import Reviews from "./pages/Reviews.jsx";
import Offers from "./pages/Offers.jsx";
import Quiz from "./components/Quiz.jsx";
function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 😢</h1>
      <p className="lead">Page not found</p>
      <a href="/" className="btn btn-primary">
        Go Home
      </a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/discount",
        element: <DiscountForm />,
      },
      {
        path: "/materials",
        element: <Materials />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
           {
        path: "/quiz",
        element: <Quiz />,
      },
            {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  
);
