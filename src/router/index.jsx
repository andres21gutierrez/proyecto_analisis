import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import App from '../App';
import Stadium from "../Components/Stadium/Stadium";
import Perfil from "../views/Perfil/Perfil";
import CreateEvent from "../views/crateEvent/creatEvent";

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
            },
            {
                path:'perfil',
                element: <Perfil/>
            },
            {
                path:'contacto',
                element: <CreateEvent/>
            }
        ]
    }
])