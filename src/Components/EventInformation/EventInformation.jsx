import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  // overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const CardHeader = styled.div`
  background-color: #4299e1;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f9fafb;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const InfoField = styled.div`
  margin-bottom: 1rem;
`;

export default function EventInfoCard({ tipo, nombre, fecha, hora, descripcion, imagenUrl}) {
  return (
    <CardContainer>
      <CardHeader>Detalles del Evento</CardHeader>
      <CardBody>
        {imagenUrl && <Image src={imagenUrl} alt={`Imagen de ${nombre}`} />}
        <InfoField>
          <strong>Tipo de Evento:</strong> {tipo}
        </InfoField>
        <InfoField>
          <strong>Nombre del Evento:</strong> {nombre}
        </InfoField>
        <InfoField>
          <strong>Fecha:</strong> {fecha}
        </InfoField>
        <InfoField>
          <strong>Hora:</strong> {hora}
        </InfoField>
        <InfoField>
          <strong>Descripción:</strong> {descripcion}
        </InfoField>

        <div className="w-full flex justify-center text-white">
          <button className="w-[150px] h-5 p-4 bg-blue-700 flex justify-center items-center hover:scale-[1.10]">
            VER ASIENTOS
          </button>
        </div>
        {/* Puedes agregar más campos según sea necesario */}
      </CardBody>
    </CardContainer>
  );
}
