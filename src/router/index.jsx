import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Events from "../views/Events";
import App from '../App';

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'eventos',
                element: <Events/>
            }
        ]
    }
])