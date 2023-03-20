import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Home/Header";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);

export default routes;
