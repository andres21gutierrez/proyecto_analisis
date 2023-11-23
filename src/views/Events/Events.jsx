import React, { useEffect, useState } from "react";
import EventImage from '../../Components/EventImage/EventImage'
import EventInfoCard from "../../Components/EventInformation/EventInformation";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #1a202c; /* Fondo rojo */
    color: #000000; /* Color de texto blanco */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  background-color: #4299e1;
  color: #ffffff;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
`;

const EventContainer = styled.div`
  width: ${({ showEvents }) => (showEvents ? "100%" : "0")};
  min-height: 115%;
  height: auto;
  overflow: hidden;
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(to right, #8b0000, #4299e1); /* Degradado de rojo a azul */
  position: absolute;
  z-index: 1;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const eventData = [
  {
    codigoEvento: '1CARD',
    tipo: "Concierto",
    nombre: "Concierto en Vivo",
    fecha: "2023-12-31",
    hora: "20:00",
    descripcion: "¡Disfruta de una noche llena de música en vivo!",
    imagenUrl: "https://i.ibb.co/pvkWCbL/music-concert-poster-template-design-7aac74443adef25b155da04ea1338157-screen.jpg",
  },
  {
    codigoEvento: '2CARD',
    tipo: "Partido",
    nombre: "International Friendly",
    fecha: "2023-12-15",
    hora: "16:00",
    descripcion: "un emocionante partido enfrentándose Ecuador con Bolivia.",
    imagenUrl: "https://i.ibb.co/SfLVr21/ecuador-vs-bolivia-friendly-800x1280fit.jpg",
  },
  {
    codigoEvento: '3CARD',
    tipo: "Partido",
    nombre: "Amistoso internacional",
    fecha: "2023-12-15",
    hora: "17:00",
    descripcion: "la selección se juega el todo por el todo Bolivia vs Trinidad y Tobago.",
    imagenUrl: "https://i.ibb.co/QbKJBBY/imagen-2023-11-12-183711712.png",
  },
  // Tres eventos adicionales
  {
    codigoEvento: '4CARD',
    tipo: "Concierto",
    nombre: "Noche de Jazz",
    fecha: "2023-11-20",
    hora: "19:30",
    descripcion: "Una velada relajante con música de jazz en vivo.",
    imagenUrl: "https://www.brande.es/wp-content/uploads/2018/11/23nov-noche-de-jazz-flyer.jpg",
  },
  {
    codigoEvento: '5CARD',
    tipo: "Partido",
    nombre: "Copa Internacional",
    fecha: "2023-11-25",
    hora: "18:45",
    descripcion: "Partido crucial en la Copa Internacional.",
    imagenUrl: "https://pbs.twimg.com/media/FYhwToMXkAAsA8x?format=jpg&name=900x900",
  },
  {
    codigoEvento: '6CARD',
    tipo: "Conferencia",
    nombre: "Conferencia Tecnológica",
    fecha: "2023-12-05",
    hora: "14:00",
    descripcion: "Explorando las últimas tendencias tecnológicas.",
    imagenUrl: "https://unjfsc.edu.pe/wp-content/uploads/2022/11/314885297_5956427624376857_6458328205588602632_n.jpg",
  },
];


export default function Events() {
  const [data, setData] = useState(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [showEvents, setShowEvents] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://146.190.214.220:5000/api/evento")
        const json = await response.json();
        // console.log(json)
        setData(json)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData()
    // console.log(data)
  }, [])

  const handleEventClick = (index) => {
    setSelectedEventIndex(index);
    setShowEvents(false);
  };

  const handleToggleEvents = () => {
    setShowEvents(!showEvents);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <ToggleButton onClick={handleToggleEvents}>
          {showEvents ? "Ocultar Eventos" : "Mostrar Eventos"}
        </ToggleButton>
        <EventContainer showEvents={showEvents}>
          <EventImage data={data} onEventClick={handleEventClick} />
        </EventContainer>
        <ContentContainer>
          {selectedEventIndex !== null && (
            <ContentWrapper>
              {console.log(data)}
              <EventInfoCard {...data[selectedEventIndex]} />
              {/* Agrega aquí la lógica para la compra de boletos si es necesario */}
            </ContentWrapper>
          )}
        </ContentContainer>
      </Container>
    </>
  );
}