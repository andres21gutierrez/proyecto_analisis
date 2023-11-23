import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import App from '../App';
import ValidateSession from "../views/ValidateSession/ValidateSession";
import Contacts from '../views/Contacts/Contactanos';

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
                element: <ValidateSession/>
            },
            {
                path:'contacto',
                element: <Contacts/>
            }
        ]
    }
])