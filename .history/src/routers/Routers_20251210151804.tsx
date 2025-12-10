import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Blog from "../../page/Blog";

export const routers =createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[{
        path:"",
        element:<Blog/>
    },
]
}])