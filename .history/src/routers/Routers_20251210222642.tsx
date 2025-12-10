import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../page/Blog";
import About from "../page/About";
import Newsletter from "../page/Newsletter";
import BlogDetails from "../page/BlogDetails";

export const routers =createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[{
     index:true,
      element:<Blog/>
    },
    {
    path:"about"   ,
    element:<About/> 
    },
    {
       path: "newsletter",
        element: <Newsletter />,
      },
    {
    path:"id", 
    element:<BlogDetails/>   
    }
    
]
}])