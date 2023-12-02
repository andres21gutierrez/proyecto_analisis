import React, { useState } from 'react';

const transparentColor = 'rgba(255, 255, 255, 0.75)';

const Registrar = () => {
    const [formData, setFormData] = useState({
        carnet: '',
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Convierte el valor de formData.carnet a un número entero si name es "carnet"
        const parsedValue = name === 'carnet' ? parseInt(value, 10) : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: parsedValue,
        }));
    };

    const isPasswordSecure = (password) => {
        // Lógica de seguridad de contraseña aquí (por ejemplo, al menos 8 caracteres, una mayúscula, un número, etc.)
        return password.length >= 8;
    };

    const arePasswordsEqual = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const doRegister = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/usuario', {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(formData)
            })
            const json = await response.json()
            alert("USUARIO REGISTRADO")
        }
        catch (error) {
            alert("VERIFIQUE LOS DATOS")
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar seguridad de la contraseña y que las contraseñas sean iguales
        const isSecure = isPasswordSecure(formData.password);
        const passwordsMatch = arePasswordsEqual(formData.password, formData.confirmPassword);

        if (isSecure && passwordsMatch) {
            // Puedes enviar el formulario aquí o realizar otras acciones
            console.log('Formulario enviado con éxito');
            console.log(formData)
            await doRegister()
        } else {
            // Mostrar mensajes de error o realizar otras acciones
            console.error('Contraseña no segura o las contraseñas no coinciden');
        }
    };

    return (
        <>
            <div className="bg-gradient-to-b from-red-700 to-red-800 min-h-screen flex items-center justify-center">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
                    <header className="text-center mb-6">
                        <img
                            src="https://i.ibb.co/HFpXLwK/account.png"
                            alt="Person Icon"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h1 className="text-2xl font-bold text-red-700">Registro - Estadio Felix Capriles</h1>
                    </header>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <input
                                    type="number"
                                    id="carnet"
                                    name="carnet"
                                    placeholder="Carnet de Identidad"
                                    className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                    value={formData.carnet}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                    className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                placeholder="Apellido"
                                className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                value={formData.apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Usuario"
                                className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                value={formData.usuario}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {formData.password && !isPasswordSecure(formData.password) && (
                                    <p className="text-red-600 text-sm">La contraseña no es segura</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirmar Contraseña"
                                    className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full max-w-lg`}
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                {!arePasswordsEqual(formData.password, formData.confirmPassword) && (
                                    <p className="text-red-600 text-sm">Las contraseñas no coinciden</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className={`bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 transition mt-4 w-full`}
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registrar;
