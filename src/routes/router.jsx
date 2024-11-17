import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import HowtoHelp from "../pages/HowtoHelp";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<DonationCampaigns></DonationCampaigns>,
                loader: ()=> fetch("campaindata.json")
            },
            {
                path:"/help",
                element:<HowtoHelp></HowtoHelp>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]

    }
])

export default router;