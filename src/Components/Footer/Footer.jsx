import styled from "styled-components";

export default function Footer(){
    return(
        <EventContainer>
            <div className="flex justify-center items-center text-white h-[300px] bg-blue-950 w-[95%]">
                    FOOTER
                </div>
        </EventContainer>
    )
}

const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #4299e1, #8b0000); /* Degradado de rojo a azul */
`;
