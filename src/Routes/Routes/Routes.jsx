import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home/Home";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import DashBoard from "../../Components/DashBoard/DashBoard/DashBord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/dashboard",
            element: <DashBoard></DashBoard>
        },
    ],
  },
]);

export default router;