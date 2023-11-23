import React, { useState } from "react";
import Imagen from "../Image/Image";
import InfoCard from "../InfoCard/InfoCard";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    font-family: 'Arial', sans-serif;
    background-color: #e53e3e; /* Fondo rojo */
    color: #000000; /* Color de texto blanco */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent; /* Fondo rojo para el contenedor de imágenes */
/* Asegura que el contenedor de imágenes esté encima del contenido */
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
   /* Establece el contenido principal detrás del contenedor de imágenes */
`;


const data = [
  {
    nombre: "Ingridh",
    apellido: "Coaquira",
    codigo: "C9701-2",
    rol: "Desarrolladora Front-End, Diseñadora de Interfaces",
    imagenUrl: "https://i.ibb.co/M2zz1dy/ingrid.jpg"
    
  },
  {
    nombre: "Iojhan",
    apellido: "Balderrama",
    codigo: "C9766-7",
    rol: "Desarrollador Back-End, Desarrollador Front-End, Tester",
    imagenUrl: "https://i.ibb.co/416B5G2/fabri.jpg"

  },
  {
    nombre: "Carlos",
    apellido: "Ricaldes",
    codigo: "C9958-9",
    rol: "Desarrolador Front-End, Tester, Diseñador",
    imagenUrl: "https://i.ibb.co/Zcs6bCk/sho.jpg"
  },
  {
    nombre: "Andrés",
    apellido: "Gutierrez",
    codigo: "C10182-6",
    rol: "Diseñador, Desarrollador Front-End, Tester",
    imagenUrl: "https://i.ibb.co/0yCSTm9/guti.jpg"
  }
];

export default function Footer() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [showImages, setShowImages] = useState(true);

  const handleImageClick = (index) => {
    setSelectedCardIndex(index);
    setShowImages(false);
  };

  const handleToggleImages = () => {
    setShowImages(!showImages);
  };

  return (
    <>
    <h2 className="bg-blue-800 text-white p-2">GRUPO DE TRABAJO</h2>
      <GlobalStyle />
      <Container>
        <ImageContainer showImages={showImages}>
          <Imagen data={data} onImageClick={handleImageClick} />
        </ImageContainer>
        <ContentContainer>
          {selectedCardIndex !== null && <InfoCard {...data[selectedCardIndex]} />}
        </ContentContainer>
        </Container>
    </>

  );
}
