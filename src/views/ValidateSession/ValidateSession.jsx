import Login from '../Login/Login';
import Perfil from '../Perfil/Perfil';

const sesion =
    {
        "cod": 1,
        "msg": "Inicio de sesion exitoso",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQ1JhbWlyZXoiLCJyb2wiOmZhbHNlLCJleHAiOjE3MDA2NzE2ODd9.YMPct_MTJg0dcXKFSxL42lfhL6dC3Rl9ykOJJm5qoh8"
    };


export default function ValidateSession({ session }) {
    return (
        <>
            {session.cod === 1 ? <Perfil /> : <Login />}
        </>
    );
}