import { devNavUrl } from "../components/helpers/functions-general";
import Dashboard from "../components/pages/developer/Dashboard";
import Home from "../components/pages/website/home-page/Home";
import Navigation from "../components/partials/Navigation";

export const routesDeveloper = [
    {
        path: `${devNavUrl}/home`,
        element: <Home/>,
    },
    {
        path: `${devNavUrl}/dashboard`,
        element: <Dashboard/>,
    },
]