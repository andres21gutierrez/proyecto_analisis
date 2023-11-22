import React from "react";
import styled, { keyframes } from "styled-components";

const BgTransform = styled.div`
  background: linear-gradient(to right, #001f3f, #8b0000);
  width: 100vw;
  height: auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: -30px; /* Ajusté el margen superior */
`;

const VideoContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-family: 'Pacifico', cursive;
  margin-bottom: 20px;
  color: #FFD700;
`;

const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%; /* Utilizamos el 100% del ancho disponible */
  overflow: hidden;
  margin-top: 2px;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const InteractiveImage = styled.img`
  width: ${({ size }) => size || "600px"}; /* Ajustado el tamaño de las primeras 3 imágenes */
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin: 20px 0;
  color: #FFD700;
`;

const SlideInImagesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 80%;
  overflow: hidden;
  margin-top: 20px;
`;

const slideInImages = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const SlideInImage = styled.img`
  width: 360px; /* Tamaño fijo para las siguientes imágenes */
  height: 240px; /* Altura fija para mantener la proporción */
  cursor: pointer;
  margin: 0 10px; /* Ajuste el margen entre las imágenes */
  animation: ${slideInImages} 0.5s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SectionTitleEvents = styled.h2`
  font-size: 36px;
  margin: 20px 0;
  color: #FFD700;
`;

const VerMasButton = styled.a`
  background-color: #FFD700;
  color: #001f3f;
  padding: 10px 20px;
  font-size: 20px;
  text-decoration: none;
  position: absolute;
  top: 95%; /* Ajusté la posición vertical del botón */
  right: 0;
  transform: translate(0, -50%);
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8b0000;
  }
`;

export default function Home() {
  return (
    <BgTransform>
      <Title>¡Bienvenido al Estadio Félix Capriles!</Title>
      <VideoContainer>
      <iframe
          width="917"
          height="516"
          src="https://www.youtube.com/embed/8Cc7LchgwpM?loop=1"
          title="⚽🏟️ Estadio Félix Capriles de Cochabamba Bolivia 2022."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </VideoContainer>
      <ImagesContainer>
        <StackContainer>
          <InteractiveImage
            size="320px" /* Ajustado el tamaño de las primeras 3 imágenes */
            src="https://fastly.4sqi.net/img/general/width960/5236869_7lD6TAoPz04X3a-KwIY-Y2zinEVWNgqoLRl80Z80J58.jpg"
            alt="Image 1"
          />
          <InteractiveImage
            size="320px" /* Ajustado el tamaño de las primeras 3 imágenes */
            src="https://i.redd.it/7zn9qew0lvi61.jpg"
            alt="Image 2"
          />
        </StackContainer>
        <InteractiveImage
          size="800px" /* Ajustado el tamaño de las primeras 3 imágenes */
          src="https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2021/03/02/2021030200361095266.jpg"
          alt="Image 3"
        />
        <VerMasButton href="https://www.diariolibre.com/revista/musica/2022/07/18/artistas-dominicanos-que-llenaron-el-estadio-olimpico/1954785" target="_blank" rel="noopener noreferrer">
          SABER MAS
        </VerMasButton>
      </ImagesContainer>
      <SectionTitle>SECCIONES PARA PARTIDOS</SectionTitle>
      <SlideInImagesContainer>
        <SlideInImage
          src="https://pbs.twimg.com/media/DD_7__5U0AAh0n8?format=jpg&name=medium"
          alt="Image 4"
        />
        <SlideInImage
          src="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2019/2/1/19_dep_1_jamessssss.jpg?itok=-S37EJBE"
          alt="Image 5"
        />
        <SlideInImage
          src="https://losestadiosdelmundo.files.wordpress.com/2013/07/2728557751732af343cfo.jpg"
          alt="Image 6"
        />
      </SlideInImagesContainer>
      <SectionTitleEvents>SECCIONES PARA EVENTOS</SectionTitleEvents>
      <SlideInImagesContainer>
        <SlideInImage
          src="https://scontent.flpb1-1.fna.fbcdn.net/v/t31.18172-8/12239314_976879799048957_8022167669994763733_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c2f564&_nc_ohc=kHDRRYUedR0AX_5IsDB&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCTji9d4x55IGncFLRI_7o3H3N8MbK7NdM39ZDlNn9bYA&oe=657D15EB"
          alt="Image 7"
        />
        <SlideInImage
          src="https://scontent.flpb1-1.fna.fbcdn.net/v/t1.18169-9/12243426_976876219049315_4196299997357350947_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=ZrkVL39YV5EAX9iHFdr&_nc_ht=scontent.flpb1-1.fna&oh=00_AfDEtYebBi9L-u-ywPusrpP7_eJN2kDP5EAPM8WIZCQCLQ&oe=657D12C4"
          alt="Image 8"
        />
        <SlideInImage
          src="https://resources.diariolibre.com/images/2022/07/18/vista-a%C3%A9rea-del-centro-olimpico-durante-el-concierto-de-el-alfa-ffb35d46.jpg"
          alt="Image 9"
        />
        
      </SlideInImagesContainer>
    </BgTransform>
  );
}
