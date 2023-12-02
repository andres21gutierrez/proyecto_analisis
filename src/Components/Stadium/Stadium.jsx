import { useState, useEffect } from "react";
import { useJwt } from "react-jwt";

export default function Stadium({ codigoEvento }) {

  // CONSTANTES DE LOS DATOS
  const [selectedSector, setSelectedSector] = useState(null);
  const [seatQuantity, setSeatQuantity] = useState(0);
  const [dataBoleto, setDataBoleto] = useState(null)
  const [sectores, setSectores] = useState(sectorsitos)
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // Agregado
  const [payData, setPayData] = useState({
    codigoPago: '',
    monto: 0,
    fecha: '',
    metodoPago: ''
  });

  const [boletoData, setBoletoData] = useState({
    codigoBoleto: '',
    numeroIngresos: 0,
    codigoSector: '',
    codigoEvento: '',
    codigoPago:'',
    codigoPago:'',
    codigoUsuario:''
  });

  // RECUPERAR COOKIE DE SESION
  const getCookie = (cookieName) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find((c) => c.trim().startsWith(cookieName + '='));
  
    if (cookie) {
      return cookie.split('=')[1];
    }
  
    return null;
  };
  
  // RECUPERA LOS SECTORES
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/sector", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({ "codigoEvento": `${codigoEvento}` })
          }
        })
        const json = await response.json();
        console.log(json)
        setSectores(json)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  // ALMACENADO DEL PAGO POR EL BOLETO
  const savePayment = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/pago', {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(payData)
        })
        const json = await response.json();
        alert("PAGO EXITOSO")
        return json.id;
    }
    catch (error) {
        alert("PAGO FALLIDO")
        console.error(error)
    }
  }

  // ALMACENADO DEL BOLETO
  const saveBoleto = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/pago', {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(boletoData)
        })
        const json = await response.json();
        alert("BOLETO REGISTRADO")
        return json.id;
    }
    catch (error) {
        alert("ALGO SALIO MAL :(")
        console.error(error)
    }
  }

  const sectorsitos = [
    {
      "codigoSector": "CS1",
      "nombre": "Curva Sur",
      "capacidadMaxima": 1000,
      "cantidadOcupantes": 500,
      "precioSector": 20,
      "codigoEvento": "EVT1",
      "habilitado": true,
      "posicionDefecto": "curvaSur",
      "comprasMaximas" : 5
    },
    {
      "codigoSector": "CN1",
      "nombre": "Curva Norte",
      "capacidadMaxima": 1200,
      "cantidadOcupantes": 600,
      "precioSector": 25,
      "codigoEvento": "EVT1",
      "habilitado": true,
      "posicionDefecto": "curvaNorte",
      "comprasMaximas" : 5
    },
    {
      "codigoSector": "PR1",
      "nombre": "Preferencial",
      "capacidadMaxima": 500,
      "cantidadOcupantes": 200,
      "precioSector": 50,
      "codigoEvento": "EVT1",
      "habilitado": true,
      "posicionDefecto": "preferencial",
      "comprasMaximas" : 5
    },
    {
      "codigoSector": "GN1",
      "nombre": "General",
      "capacidadMaxima": 1500,
      "cantidadOcupantes": 800,
      "precioSector": 15,
      "codigoEvento": "EVT1",
      "habilitado": true,
      "posicionDefecto": "general",
      "comprasMaximas" : 5
    }]



// ACTUALIZACIONES DE DATOS 
useEffect(() => {
  generatePayment();
}, [selectedSector, seatQuantity]);

useEffect(() => {
  console.log('Datos actualizados:', payData);
}, [payData]);

// ACTUALIZAR DATOS DEL BOLETO
useEffect(() => {
  console.log('Datos actualizados Boleto:', boletoData);
}, [boletoData]);

  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
  };


  // VALIDACIONES
  const isValidless = (cantidad) => {
    return  cantidad > 0;
};

  const isValidfull = (cantidad) => {
    return cantidad <= selectedSector.comprasMaximas;
  }

  const emptySlot = (cantidad) =>{
    return cantidad <= (selectedSector.capacidadMaxima - selectedSector.cantidadOcupantes);
  };

  const calculateAmount = () => {
    if (selectedSector && selectedSector.precioSector) {
      return Number(selectedSector.precioSector * seatQuantity);
    }
    return 0;
  };
  
  // CALCULOS DEL PAGO
  const generatePayment = () => {
    setPayData((prevPayData) => ({
      ...prevPayData,
      monto: calculateAmount(),
      fecha: new Date(),
      metodoPago: selectedPaymentMethod,
    }), () => {
      alert(payData.monto);
    });
  };
  
  const generateBoleto = (codePay, codeUser) => {
    setDataBoleto((prevDataBoleto) => ({
      ...prevDataBoleto,
      codigoBoleto: '',
      numeroIngresos: seatQuantity,
      codigoSector: selectedSector.codigoSector,
      codigoEvento: props.codigoEvento,
      codigoPago: codePay,
      codigoUsuario: codeUser
    }), () => {
      alert(payData.monto);
    });
  }

  const findUser = () =>{
    const Usercookie = getCookie('sesion'); 
    return Usercookie;
  }

  const buy = () =>{
    generatePayment();
    const codePay = savePayment();
    const codeUser = findUser();
    generateBoleto(codePay, codeUser);
  }

  const invalidQuantity = () =>{
    alert('CANTIDAD INVALIDA, SELECCIONE UNA CANTIDAD VALIDA')
    setSeatQuantity(0);
  }

  const handleBuySeats = () => {
    {isValidless(seatQuantity) && emptySlot(seatQuantity) && isValidfull(seatQuantity) ?
      buy()
      :
      invalidQuantity()
    };
  }

  // const getSectorsbyEv = (Ev, jsonSectores) => {
  //   let toReturn = [];
  //   for (let i = 0; i < jsonSectores.length; i++) {
  //     if (jsonSectores[i].codigoEvento === Ev) {
  //       toReturn.push(jsonSectores[i]);
  //     }
  //   }
  //   return toReturn;
  // };


  return (
    <div className="flex flex-col items-center bg-red-500 lg:flex-row py-5 justify-center">
      <div className="flex">
        {sectores && sectores.find(sector => sector.posicionDefecto === "curvaSur").habilitado === true ? <CurvaSur element={sectores.find(sector => sector.posicionDefecto === "curvaSur")} handle={handleSectorClick} /> : <CurvaSur disp={true} />}
        <div className="px-2">
          {sectores && sectores.find(sector => sector.posicionDefecto === "general").habilitado === true ? <General element={sectores.find(sector => sector.posicionDefecto === "general")} handle={handleSectorClick} /> : <General disp={true} />}
          <Cesped></Cesped>
          {sectores && sectores.find(sector => sector.posicionDefecto === "preferencial").habilitado === true ? <Preferencial element={sectores.find(sector => sector.posicionDefecto === "preferencial")} handle={handleSectorClick} /> : <Preferencial disp={true} />}
        </div>
        {sectores && sectores.find(sector => sector.posicionDefecto === "curvaNorte").habilitado === true ? <CurvaNorte element={sectores.find(sector => sector.posicionDefecto === "curvaNorte")} handle={handleSectorClick} /> : <CurvaNorte disp={true} />}
      </div>
      <div className=" lg:ml-4">
        <TableInfo
          selectedSector={selectedSector}
          seatQuantity={seatQuantity}
          handleBuySeats={handleBuySeats}
          setSeatQuantity={setSeatQuantity}
          selectedPaymentMethod={selectedPaymentMethod} // Agregado
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />
      </div>
    </div>
  );
}

const TableInfo = ({ selectedSector, seatQuantity, handleBuySeats, setSeatQuantity, selectedPaymentMethod, setSelectedPaymentMethod }) => {
  if (!selectedSector) {
    return null;
  }

  const paymentMethods = ["Qr", "Tarjeta de crédito", "Transferencia bancaria"];


  return (
    <div>
      <h2 className=" text-lg text-white p-4">{selectedSector.nombre}</h2>
      <table>
        <thead>
          <tr>
            <th className="md:p-2 text-sm text-white">CANTIDAD DE ESPACIOS DISPONIBLES</th>
            <th className="md:p-2 text-sm text-white">PRECIO POR INGRESO</th>
            <th className="md:p-2 text-sm text-white">COMPRAS MAXIMAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-white">{selectedSector.capacidadMaxima - selectedSector.cantidadOcupantes}</td>
            <td className=" text-white">{selectedSector.precioSector} Bs</td>
            <td className="text-white">{selectedSector.comprasMaximas}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="py-4">
            <label htmlFor="paymentMethod" className="text-white mr-2">Método de Pago:</label>
            <select
              id="paymentMethod"
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="p-2 border border-white rounded"
            >
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          type="number"
          value={seatQuantity}
          onChange={(e) => setSeatQuantity(e.target.value)}
          className=" text-center"
        />
        <button className=" bg-blue-950 text-white p-2 mt-4" onClick={handleBuySeats}>COMPRAR ENTRADAS</button>
      </div>
    </div>
  );
};


// CENTRO DEL STADIUM
const Cesped = () => {
  return (
    <div className="relative md:w-[512px] w-[240px] mx-auto px-2">
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

  const General = (props)=>{
    return(
        <button onClick={() => props.handle(props.element)} disabled={props.disp === true} className={`md:w-[512px] w-[230px] mx-auto ${ props.disp === true ? `opacity-25` : ``}`}>
            <div className="max-w-lg mb-4">
                <div className="md:h-20 h-10 border-2 text-white font-bold border-white overflow-hidden hover:text-lg flex items-center justify-center">
                    GENERAL
                </div>
            </div>
        </button>
    )
  }

const Preferencial = (props)=>{
    return(
        <button onClick={() => props.handle(props.element)}  className={`md:w-[512px]  w-[230px] mx-auto ${ props.disp == true ? `opacity-25` : ``}`} disabled={props.disp === true}>
            <div className="max-w-lg mt-4">
                <div className={"md:h-20 h-10 border-2 hover:text-lg font-bold text-white border-white overflow-hidden flex items-center justify-center"}>
                    PREFERENCIAL
                </div>
            </div>
        </button>
    )
}

const CurvaSur = (props)=>{
    return(
        <button onClick={() => props.handle(props.element)}  disabled={props.disp === true} className={`md:h-[510px] hover:text-lg font-bold h-[290px] rounded-l-full md:w-[100px] w-[50px] border-2 text-white border-white flex items-center justify-center ${props.disp == true ? `opacity-25` : ``}`}>
          <span className="transform hover:text-lg md:-rotate-0 -rotate-90">SUR</span>
        </button>
    )
}

const CurvaNorte = (props)=>{
    return(
        <button onClick={() => props.handle(props.element)}  disabled={props.disp === true} className={`md:h-[510px] hover:text-lg font-bold h-[290px] rounded-r-full md:w-[100px] w-[50px]  border-2 border-white text-white flex items-center justify-center ${props.disp == true ? `opacity-25` : ``}`}>
            <span className="transform md:-rotate-0 -rotate-90">NORTE</span>
        </button>
    )
}
