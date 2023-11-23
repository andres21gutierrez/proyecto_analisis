import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import App from '../App';
// import ValidateSession from "../views/ValidateSession/ValidateSession";
import Contacts from '../views/Contacts/Contactanos';
import Login from '../views/Login/Login'
import Registrar from '../views/Register/Registrar'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'eventos',
                element: <Events />
            },
            {
                path: 'perfil',
                element: <Login />
            },
            {
                path: 'contacto',
                element: <Contacts />
            },
            {
                path: '/registro',
                element: <Registrar />
            }
        ]
    }
])