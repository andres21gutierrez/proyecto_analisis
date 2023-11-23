import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const EventImageItem = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  margin: 10px;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledEventImageItem = styled(EventImageItem)`
  max-width: 200px; /* Establece el tamaño máximo deseado */
`;

export default function EventImage({ data, onEventClick }) {
  if (data == null) { return <p>Loading</p> }
  return (
    <ImageContainer>
      {data.map((event, index) => (
        <StyledEventImageItem
          key={index}
          src={event.imgURL}
          alt={`Imagen de ${event.nombre}`}
          onClick={() => onEventClick(index)}
        />
      ))}
    </ImageContainer>
  );
}