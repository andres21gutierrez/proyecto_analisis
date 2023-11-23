import React from 'react';

const ContactForm = () => {
  const transparentColor = 'rgba(255, 255, 255, 0.75)';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="bg-gradient-to-b from-red-700 to-red-800 min-h-screen flex items-center justify-center p-8">
      {/* Additional information on the left side */}
      <div className="mr-12 text-white text-left">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">BOLIVIA</h2>
          <p className={`text-lg ${transparentColor} mb-8`}><strong>Cochabamba</strong></p>
          <p className={`text-sm ${transparentColor} mb-8`}><strong>Dirección:</strong><br />Av. Libertador SImon Bolivar esq. Av. Juan de la Rosa</p>
          <p className={`text-sm ${transparentColor} mb-8`}><strong>Teléfonos de referencia:</strong></p>
          <ul className={`list-none pl-6 ${transparentColor} mb-4`}>
            <li className="mb-4">71446845</li>
            <li className="mb-4">78721085</li>
            <li className="mb-4">60717670</li>
            <li className="mb-">62668053</li>
          </ul>
          <p className={`text-sm ${transparentColor} mb-4`}><strong>Correo de contacto:</strong><br />ingridhcoaquira@gmail.com</p>
        </div>
      </div>
      {/* Form container moved to the left */}
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md ml-0">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-red-700 mb-2 text-left">ESCRÍBENOS</h1>
          <p className={`text-sm text-gray-600 ${transparentColor} mb-4 text-left`}>
            Queremos saber tus consultas o reclamos. Para poder brindarte una mejor atención, 
            déjanos los siguientes datos. 
            En cuanto podamos, te contactaremos.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombres y Apellidos"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full`}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Número de Teléfono"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full`}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full`}
              required
            />
          </div>
          <div className="mb-4">
            <select
              id="queryType"
              name="queryType"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full`}
              required
            >
              <option value="" disabled selected>
                Tipo de Consulta o Reclamo
              </option>
              <option value="Consulta">Consulta</option>
              <option value="Reclamo">Reclamo</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu consulta o reclamo aquí"
              rows="4"
              className={`border border-gray-300 p-2 rounded-lg mt-1 ${transparentColor} w-full`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 transition mt-4 w-full`}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
