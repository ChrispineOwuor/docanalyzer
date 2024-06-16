import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import Filecontext from "./contexts/FileUloaderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Filecontext>
    {" "}
    <RouterProvider router={router} />
  </Filecontext>
);
