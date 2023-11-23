import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import App from '../App';
import ValidateSession from "../views/ValidateSession/ValidateSession";
import Contacts from '../views/Contacts/Contactanos';
import Login from '../views/Login/Login'
import Registrar from '../views/Register/Registrar'
import { ProtectedRoute } from "./ProtectedRoute";
import ProfileData from "../views/Perfil/Perfil";

const isAuthenticated = true;

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
                path: 'login',
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
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/eventos",
                element: <Events />
            },
            {
                path: "/perfil",
                element: <ProfileData />
            }
        ]
    }
])