import {
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";

import HOME from "./pages/home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (<HOME />),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);