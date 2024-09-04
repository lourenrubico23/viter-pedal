import { devNavUrl } from "../components/helpers/functions-general";
import Home from "../components/pages/developer/home-page/Home";



export const routesDeveloper = [
    {
        path: `${devNavUrl}/home`,
        element: <Home/>,
    },
]