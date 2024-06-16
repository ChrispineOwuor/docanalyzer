import { createBrowserRouter } from "react-router-dom";

import Upload from "../pages/Upload";
import Home from "../pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
    ],
  },
]);
export default router;
