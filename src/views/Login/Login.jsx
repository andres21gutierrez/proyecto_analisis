import React, { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    usuario: '',
    password: ''
  })
  const [session, setSession] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const makeLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data)
      })
      const json = await response.json()
      // console.log(json)
      setSession(json)
    }
    catch (error) {
      console.error(error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { usuario, password } = data;

    console.log("data.username -> " + data.usuario)
    console.log("data.password -> " + data.password)

    await makeLogin()
    console.log(session)
  };



  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const transparentColor = 'rgba(255, 255, 255, 0.75)';

  const handleGoogleLogin = () => {

    console.log('login por google');
  };

  const handleFacebookLogin = () => {

    console.log('login por face');
  };

  return (
    <div className="bg-gradient-to-b from-red-700 to-red-800 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <header className="text-center mb-6">
          <img
            src="https://i.ibb.co/HFpXLwK/account.png"
            alt="Person Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-red-700">Estadio Felix Capriles</h1>
        </header>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="usuario"
              placeholder="Nombre de Usuario"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
              value={data.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Contraseña"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
              value={data.password}
              onChange={handleChange}
            />
            <span
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <img
                  src="https://i.ibb.co/Hqp7gwW/hide.png"
                  alt="Hide Password"
                  className="w-4 h-4"
                />
              ) : (
                <img
                  src="https://i.ibb.co/jzqMVBw/show.png"
                  alt="Show Password"
                  className="w-4 h-4"
                />
              )}
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className={`text-sm text-gray-600 ${transparentColor}`}>
              Recordarme
            </label>
          </div>
          <div className="text-center mt-2">
            <a href="#" className={`text-red-700 text-sm ${transparentColor}`}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className={`bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 transition mt-4 w-full`}
          >
            Iniciar Sesión
          </button>

          <div className="mb-2 mt-4 flex justify-between">
            {/* boton de gulu gulu*/}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className={`bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition w-48`}
            >
              <img
                src="https://i.ibb.co/LgjpWkG/google-1.png"
                alt="Icono de Google"
                className="w-4 h-4 mr-2 inline-block"
              />
              Google
            </button>
            {/* boton del facebuk*/}
            <button
              type="button"
              onClick={handleFacebookLogin}
              className={`bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition w-48`}
            >
              <img
                src="https://i.ibb.co/gwgHH06/facebook.png"
                alt="Icono de Facebook"
                className="w-4 h-4 mr-2 inline-block"
              />
              Facebook
            </button>

          </div>
          <div className="text-center mt-2">
            <p>No tienes Cuenta?</p>
            <a href="#" className={`text-blue-700 text-sm ${transparentColor}`} href='/registro'>
              Registrate!!
            </a>
          </div>
        </form>
        <footer className="mt-8 text-center text-xs text-gray-600">
          <p>© 2023 Estadio Felix Capriles. Todos los derechos reservados.</p>
          <div className="mt-1">
            <a href="#" className={`text-red-700 ${transparentColor}`}>
              Política de Privacidad
            </a>{' '}
            |{' '}
            <a href="#" className={`text-red-700 ${transparentColor}`}>
              Términos de Servicio
            </a>
          </div>
        </footer>
      </div >
    </div >
  );
};

export default LoginForm;
