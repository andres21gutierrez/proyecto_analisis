export default function Stadium(){
    return(
        <div className="flex py-5 justify-center">
            <div className="flex">
                <CurvaSur></CurvaSur>
                <div className="px-2">
                    <GeneralA></GeneralA>
                    <Cesped></Cesped>
                    <GeneralB></GeneralB>
                </div>
                <CurvaNorte></CurvaNorte>
            </div>            
        </div>
    )
}

// CENTRO DEL STADIUM
const Cesped = () => {
    return (
      <div className="relative md:w-[512px] w-[300px] mx-auto px-2">
        <div className="rounded-lg max-w-lg bg-green-500 p-4">
          <div className="relative md:h-72 h-[150px] bg-green-500 rounded-lg overflow-hidden">
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 transform border-[3px] border-white w-1/4 h-1/2" />
            <div className="absolute bottom-1/4 left-0 -translate-x-1/2 transform border-[3px]  border-white w-1/4 h-1/2" />
            <div className="absolute h-[3px] w-full bg-white"></div>
            <div className="absolute h-[3px] w-full bottom-0 bg-white"></div>
            <div className="absolute h-full w-[3px] bg-white"></div>
            <div className="absolute h-full w-[3px] right-0 bg-white"></div>
            <div className="absolute h-full w-[3px] right-1/2 bg-white"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-2 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[3px] border-white md:w-16 md:h-16 w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    );
  };

const GeneralA = (numAsientos, habilitado)=>{
    return(
        <div className="md:w-[512px] w-[300px] mx-auto">
            <div className="max-w-lg mb-4">
                <div className="h-20 border-2 border-black overflow-hidden flex items-center justify-center">
                    GENERAL A
                </div>
            </div>
        </div>
    )
}

const GeneralB = (numAsientos, habilitado)=>{
    return(
        <div className="md:w-[512px] w-[300px] mx-auto">
            <div className="max-w-lg mt-4">
                <div className="h-20 border-2 border-black overflow-hidden flex items-center justify-center">
                    GENERAL B
                </div>
            </div>
        </div>
    )
}

const CurvaSur = (numAsientos, habilitado)=>{
    return(
        <div className="md:h-[510px] rounded-l-full h-[180px] w-[100px] border-2 border-black flex items-center justify-center">
            SUR
        </div>
    )
}

const CurvaNorte = (numAsientos, habilitado)=>{
    return(
        <div className="md:h-[510px] h-[180px] rounded-r-full w-[100px] border-2 border-black flex items-center justify-center">
            NORTE
        </div>
    )
}