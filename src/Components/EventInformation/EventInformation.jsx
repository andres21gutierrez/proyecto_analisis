import React, { useState } from "react";
import styled from "styled-components";
import Stadium from "../Stadium/Stadium";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 1px;
  max-width: 100%;
  max-height: 80%;
  overflow: auto;
`;

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

const sectores = [
  {
    "codigoSector": "CS1",
    "nombre": "Curva Sur",
    "capacidadMaxima": 1000,
    "cantidadOcupantes": 500,
    "precioSector": 20.0,
    "codigoEvento": "EVT1",
    "habilitado": true,
    "posicionDefecto": "curvaSur"
  },
  {
    "codigoSector": "CN1",
    "nombre": "Curva Norte",
    "capacidadMaxima": 1200,
    "cantidadOcupantes": 600,
    "precioSector": 25.0,
    "codigoEvento": "EVT1",
    "habilitado": true,
    "posicionDefecto": "curvaNorte"
  },
  {
    "codigoSector": "PR1",
    "nombre": "Preferencial",
    "capacidadMaxima": 500,
    "cantidadOcupantes": 200,
    "precioSector": 50.0,
    "codigoEvento": "EVT1",
    "habilitado": true,
    "posicionDefecto": "preferencial"
  },
  {
    "codigoSector": "GN1",
    "nombre": "General",
    "capacidadMaxima": 1500,
    "cantidadOcupantes": 800,
    "precioSector": 15.0,
    "codigoEvento": "EVT1",
    "habilitado": true,
    "posicionDefecto": "general"
  }
];

export default function EventInfoCard({codigoEvento, tipo, nombre, fecha, hora, descripcion, imagenUrl}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
        <button
          onClick={openModal}
          className="w-[170px] h-5 p-4 bg-blue-700 flex justify-center items-center hover:scale-[1.10]"
        >
          VER SECTORES
        </button>
      </div>

      {modalOpen && (
        <ModalBackground>
          <ModalContent>
            <Stadium sectores={sectores}/>
            <button className=" bg-blue-600 p-3 text-white" onClick={closeModal}>Volver</button>
          </ModalContent>
        </ModalBackground>
      )}
      </CardBody>
    </CardContainer>
  );
}
