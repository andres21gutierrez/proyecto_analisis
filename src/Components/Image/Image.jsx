// ImageList.js
import React from "react";
import styled from "styled-components";

// ImageList.js

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: transparent;  /* Fondo rojo */
  padding: 10px;
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Image({ data, onImageClick }) {
  return (
    <ImageContainer>
      {data.map((userData, index) => (
        <Imagen
          key={index}
          src={userData.imagenUrl}
          alt={`Imagen de ${userData.nombre}`}
          onClick={() => onImageClick(index)}
        />
      ))}
    </ImageContainer>
  );
}
