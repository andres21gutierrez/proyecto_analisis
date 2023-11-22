import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: linear-gradient(to right, #001f3f, #8b0000); /* Fondo degradado azul a rojo */
  color: #000000; /* Cambiar el color del texto a negro */
  min-height: 100vh; /* Altura mínima del 100% del viewport */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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
`;

const CreateEvent = ({ onCreateEvent }) => {
  const [eventData, setEventData] = useState({
    tipo: "",
    tipoEventoPersonalizado: "", // Agregamos el campo para el tipo personalizado
    nombre: "",
    fecha: "",
    hora: "",
    descripcion: "",
    imagenUrl: "",
  });

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
      // Si el valor seleccionado es "otros", también puedes borrar el valor actual de "tipoEventoPersonalizado"
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
    // Aquí puedes realizar acciones con los datos del evento
    onCreateEvent(eventData);
    // Limpiar el formulario después de la creación del evento
    setEventData({
      tipo: "",
      tipoEventoPersonalizado: "",
      nombre: "",
      fecha: "",
      hora: "",
      descripcion: "",
      imagenUrl: "",
    });
  };

  return (
    <MainContainer>
      <FormContainer>
        <h2>Crear Nuevo Evento</h2>
        <form onSubmit={handleSubmit}>
          <FormLabel>Tipo de Evento:</FormLabel>
          <FormSelect
            name="tipo"
            value={eventData.tipo}
            onChange={handleTipoChange}
            required
          >
            <FormOption value="partido">Partido</FormOption>
            <FormOption value="concierto">Concierto</FormOption>
            <FormOption value="otros">Otros</FormOption>
          </FormSelect>

          {/* Si se selecciona "Otros", mostrar una entrada de texto para el tipo de evento personalizado */}
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
          <FormInput
            type="text"
            name="nombre"
            value={eventData.nombre}
            onChange={handleChange}
            required
          />

          <FormLabel>Fecha:</FormLabel>
          <FormInput
            type="date"
            name="fecha"
            value={eventData.fecha}
            onChange={handleChange}
            required
          />

          <FormLabel>Hora:</FormLabel>
          <FormInput
            type="time"
            name="hora"
            value={eventData.hora}
            onChange={handleChange}
            required
          />

          <FormLabel>Descripción:</FormLabel>
          <FormTextarea
            name="descripcion"
            value={eventData.descripcion}
            onChange={handleChange}
            required
          />

          <FormLabel>URL de la Imagen:</FormLabel>
          <FormInput
            type="url"
            name="imagenUrl"
            value={eventData.imagenUrl}
            onChange={handleChange}
            required
          />

          <FormButton type="submit">Crear Evento</FormButton>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateEvent;
