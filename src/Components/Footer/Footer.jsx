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
  height: 80vh;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e53e3e; /* Fondo rojo para el contenedor de imágenes */
  z-index: 1; /* Asegura que el contenedor de imágenes esté encima del contenido */
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0; /* Establece el contenido principal detrás del contenedor de imágenes */
`;


const data = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    codigo: "123456",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagenUrl: "https://i.ibb.co/pjDxYzw/imagen-2023-11-12-144522357.png",
    celular: "123-456-7890",
    correo: "juan@example.com",
    direccion: "Calle 123, Ciudad"
    
  },
  {
    nombre: "María",
    apellido: "Gómez",
    codigo: "789012",
    descripcion: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    imagenUrl: "https://i.ibb.co/5hHg3xR/imagen-2023-11-12-144706210.png",celular: "123-456-7890",
    correo: "juan@example.com",
    direccion: "Calle 123, Ciudad"
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    codigo: "345678",
    descripcion: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagenUrl: "https://i.ibb.co/LNk31FG/imagen-2023-11-12-144737081.png",
    celular: "123-456-7890",
    correo: "juan@example.com",
    direccion: "Calle 123, Ciudad"
  },
  {
    nombre: "Ana",
    apellido: "López",
    codigo: "901234",
    descripcion: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagenUrl: "https://i.ibb.co/ggjyYLV/imagen-2023-11-12-144808447.png",
    celular: "123-456-7890",
    correo: "juan@example.com",
    direccion: "Calle 123, Ciudad"
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
