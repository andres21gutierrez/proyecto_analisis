import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: linear-gradient(to right, #001f3f, #8b0000);
  color: #000000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 100px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormOption = styled.option`
  // Puedes aplicar estilos adicionales según sea necesario
`;

const FormButton = styled.button`
  background-color: #4299e1;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const CreateEvent = ({ onCreateEvent }) => {
  const [eventData, setEventData] = useState({
    id: "",
    tipo: "",
    tipoEventoPersonalizado: "",
    nombre: "",
    fecha: "",
    hora: "",
    descripcion: "",
    imagenUrl: "",
  });

  const [currentEventId, setCurrentEventId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTipoChange = (e) => {
    const { value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      tipo: value,
      tipoEventoPersonalizado: value === "otros" ? "" : prevData.tipoEventoPersonalizado,
    }));
  };

  const handleTipoPersonalizadoChange = (e) => {
    const { value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      tipoEventoPersonalizado: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEventId !== null) {
      // Modificar el evento existente
      console.log("Modificar evento con ID:", currentEventId, "y datos:", eventData);
    } else {
      // Crear un nuevo evento
      console.log("Crear nuevo evento con datos:", eventData);
    }

    // Limpiar el formulario después de la creación o modificación del evento
    setEventData({
      id: "",
      tipo: "",
      tipoEventoPersonalizado: "",
      nombre: "",
      fecha: "",
      hora: "",
      descripcion: "",
      imagenUrl: "",
    });

    // Restablecer el ID del evento actual
    setCurrentEventId(null);
  };

  const handleModificar = () => {
    console.log("Modificar evento");

    if (eventData.id.trim() !== "") {
      // Obtener los detalles del evento utilizando el ID y establecerlos en el estado 'eventData'
      const detallesEvento = getEventDetailsById(eventData.id);

      if (detallesEvento) {
        setEventData({
          id: eventData.id,
          tipo: detallesEvento.tipo,
          tipoEventoPersonalizado: detallesEvento.tipoEventoPersonalizado,
          nombre: detallesEvento.nombre,
          fecha: detallesEvento.fecha,
          hora: detallesEvento.hora,
          descripcion: detallesEvento.descripcion,
          imagenUrl: detallesEvento.imagenUrl,
        });

        // Establecer el ID del evento actual
        setCurrentEventId(eventData.id);
      } else {
        console.log("No se encontraron detalles para el ID proporcionado");
      }
    } else {
      console.log("Por favor, ingresa un ID válido");
    }
  };

  const handleEliminar = () => {
    console.log("Eliminar evento");
    setCurrentEventId("ID_DEL_EVENTO_A_ELIMINAR"); // Reemplaza con el ID del evento actual
  };

  // Función de ejemplo para obtener detalles del evento por ID
  const getEventDetailsById = (eventId) => {
    // Aquí debes implementar la lógica para obtener los detalles del evento por ID
    // Puedes realizar una llamada a la API, acceder a tu base de datos, o como sea que almacenes tus datos
    // Por ahora, estoy devolviendo un objeto de ejemplo
    const eventos = [
      {
        id: "1",
        tipo: "partido",
        tipoEventoPersonalizado: "",
        nombre: "Partido de fútbol",
        fecha: "2023-01-01",
        hora: "18:00",
        descripcion: "Un emocionante partido de fútbol",
        imagenUrl: "https://ejemplo.com/imagen1.jpg",
      },
      // Otros eventos...
    ];

    return eventos.find((evento) => evento.id === eventId);
  };

  return (
    <MainContainer>
      <FormContainer>
        <h2>{currentEventId !== null ? "Modificar Evento" : "Crear Nuevo Evento"}</h2>
        <form onSubmit={handleSubmit}>
          {currentEventId !== null && (
            <div>
              <FormLabel>ID del Evento:</FormLabel>
              <FormInput
                type="text"
                name="id"
                value={eventData.id}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <FormLabel>Tipo de Evento:</FormLabel>
          <FormSelect name="tipo" value={eventData.tipo} onChange={handleTipoChange} required>
            <FormOption value="partido">Partido</FormOption>
            <FormOption value="concierto">Concierto</FormOption>
            <FormOption value="otros">Otros</FormOption>
          </FormSelect>

          {eventData.tipo === "otros" && (
            <div>
              <FormLabel>...</FormLabel>
              <FormInput
                type="text"
                name="tipoEventoPersonalizado"
                value={eventData.tipoEventoPersonalizado}
                onChange={handleTipoPersonalizadoChange}
                required
              />
            </div>
          )}

          <FormLabel>Nombre del Evento:</FormLabel>
          <FormInput type="text" name="nombre" value={eventData.nombre} onChange={handleChange} required />

          <FormLabel>Fecha:</FormLabel>
          <FormInput type="date" name="fecha" value={eventData.fecha} onChange={handleChange} required />

          <FormLabel>Hora:</FormLabel>
          <FormInput type="time" name="hora" value={eventData.hora} onChange={handleChange} required />

          <FormLabel>Descripción:</FormLabel>
          <FormTextarea name="descripcion" value={eventData.descripcion} onChange={handleChange} required />

          <FormLabel>URL de la Imagen:</FormLabel>
          <FormInput type="url" name="imagenUrl" value={eventData.imagenUrl} onChange={handleChange} required />

          <FormButton type="submit">{currentEventId !== null ? "Modificar Evento" : "Crear Evento"}</FormButton>
          <FormButton type="button" onClick={handleModificar}>Modificar</FormButton>
          <FormButton type="button" onClick={handleEliminar}>Eliminar</FormButton>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateEvent;
