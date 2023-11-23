// InfoCard.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px; /* Ajusta según tu preferencia */
  margin: 1rem auto; /* Agrega margen alrededor del contenedor */
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;  /* Fondo blanco */
`;

const CardHeader = styled.div`
  background-color: #4299e1;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column; /* Alinea los elementos en columna en dispositivos móviles */
  padding: 1rem;
  align-items: center;
  background-color: #f9fafb;  /* Fondo gris claro */
`;

const Image = styled.img`
  max-width: 50%; /* La imagen ocupará el 100% del ancho del contenedor */
  max-height: 280px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const InfoField = styled.div`
  margin-bottom: 1rem;
`;

export default function InfoCard({ nombre, apellido, codigo, descripcion, imagenUrl, celular, correo, direccion }) {
  return (
    <CardContainer>
      <CardHeader>Información</CardHeader>
      <CardBody>
        {imagenUrl && <Image src={imagenUrl} alt={`Imagen de ${nombre}`} />}
        <InfoField>
          <strong>Nombre:</strong> {nombre}
        </InfoField>
        <InfoField>
          <strong>Apellido:</strong> {apellido}
        </InfoField>
        <InfoField>
          <strong>Código:</strong> {codigo}
        </InfoField>
        <InfoField>
          <strong>Celular:</strong> {celular}
        </InfoField>
        <InfoField>
          <strong>Correo:</strong> {correo}
        </InfoField>
        <InfoField>
          <strong>Dirección:</strong> {direccion}
        </InfoField>
        <InfoField>
          <strong>Descripción:</strong> {descripcion}
        </InfoField>
      </CardBody>
    </CardContainer>
  );
}
