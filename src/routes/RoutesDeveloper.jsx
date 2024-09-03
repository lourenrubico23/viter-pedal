import { devNavUrl } from "../components/helpers/functions-general";
import Home from "../components/pages/home-page/Home";
import Header from "../components/partials/Header";

export const routesDeveloper = [
    {
        path: `${devNavUrl}/home`,
        element: <Home/>,
    },
]