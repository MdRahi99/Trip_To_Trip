import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home/Home";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import DashBoard from "../../Components/DashBoard/DashBoard/DashBord";
import SignUp from "../../Components/Register/SignUp/SignUp";
import LogIn from "../../Components/Register/LogIn/LogIn";
import Packages from "../../Components/Packages/Packages";
import PackageDetails from "../../Components/Packages/PackageDetails";

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
            path: "/packages/:id",
            loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`),
            element: <PackageDetails></PackageDetails>
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
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
    ],
  },
]);

export default router;