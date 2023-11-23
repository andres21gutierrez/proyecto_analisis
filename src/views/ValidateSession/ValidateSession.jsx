import Login from '../Login/Login';
import Perfil from '../Perfil/Perfil';
<<<<<<< HEAD
// const sesion =
// {
//     "cod": -1,
//     "msg": "Inicio de sesion exitoso",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQ1JhbWlyZXoiLCJyb2wiOmZhbHNlLCJleHAiOjE3MDA2NzE2ODd9.YMPct_MTJg0dcXKFSxL42lfhL6dC3Rl9ykOJJm5qoh8"
// };
=======
const sesion =
    {
        "cod": 1,
        "msg": "Inicio de sesion exitoso",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiQ1JhbWlyZXoiLCJyb2wiOmZhbHNlLCJleHAiOjE3MDA2NzE2ODd9.YMPct_MTJg0dcXKFSxL42lfhL6dC3Rl9ykOJJm5qoh8"
    };
>>>>>>> 5bdb90d90e4786f58a546287888596e472e7deeb


export default function ValidateSession({ session }) {
    return (
        <>
            {session.cod === 1 ? <Perfil /> : <Login />}
        </>
    );
}