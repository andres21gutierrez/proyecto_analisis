import React, { useState } from "react";
import styled from "styled-components";

const UserDataContainer = styled.div`
  background: linear-gradient(to right, #001f3f, #8b0000);
  color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const ChangePasswordButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PurchaseHistoryButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000000; /* Establece el color del texto a negro */
`;

const FormButton = styled.button`
  background-color: #4299e1;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  display: ${(props) => (props.isVisible ? "table" : "none")};
`;

const TableHeader = styled.th`
  background-color: #333;
  color: #fff;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ProfileData = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    codigoCliente: "123456",
    carnet: "A12345",
    email: "juan.perez@example.com",
    usuario: "juancito",
    password: "********",
  });

  const [purchaseHistory, setPurchaseHistory] = useState([
    {
      tipoEvento: "Concierto",
      eventName: "Concierto A",
      sector: "VIP",
      occupiedQuantity: 2,
      date: "2023-01-15",
      payment: "200.00 USD",
      status: "Pagado",
    },
    // Agrega más datos según sea necesario
  ]);

  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPurchaseHistory, setShowPurchaseHistory] = useState(false);

  const handleChangePassword = () => {
    setShowChangePasswordForm(true);
    setShowPurchaseHistory(false); // Ocultar historial de compras al cambiar contraseña
  };

  const handleSubmitPasswordChange = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar la contraseña actual y cambiarla
    console.log("Verificando y cambiando la contraseña...");
    // Reiniciar los estados después del cambio de contraseña
    setCurrentPassword("");
    setNewPassword("");
    setShowChangePasswordForm(false);
  };

  const viewPurchaseHistory = () => {
    setShowPurchaseHistory(true);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <UserDataContainer>
      <Title>Datos de Perfil</Title>
      <p>
        <strong>Nombre:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Apellido:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Código de Cliente:</strong> {userData.codigoCliente}
      </p>
      <p>
        <strong>Carnet:</strong> {userData.carnet}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Usuario:</strong> {userData.usuario}
      </p>
      <p>
        <strong>Contraseña:</strong> {showPassword ? userData.password : "********"}
      </p>
      <ChangePasswordButton onClick={handleChangePassword}>
        Cambiar Contraseña
      </ChangePasswordButton>
      <PurchaseHistoryButton onClick={viewPurchaseHistory}>
        Historial de Compras
      </PurchaseHistoryButton>

      <FormContainer isVisible={showChangePasswordForm}>
        <h3>Cambiar Contraseña</h3>
        <form onSubmit={handleSubmitPasswordChange}>
          <FormLabel>Contraseña Actual:</FormLabel>
          <FormInput
            type="text"  // Cambiado a "text" para que sea visible
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <FormLabel>Nueva Contraseña:</FormLabel>
          <FormInput
            type="text"  // Cambiado a "text" para que sea visible
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <FormButton type="submit">Cambiar Contraseña</FormButton>
        </form>
      </FormContainer>

      {showPurchaseHistory && purchaseHistory.length > 0 && (
        <Table isVisible={true}>
          <thead>
            <tr>
              <TableHeader>Tipo de Evento</TableHeader>
              <TableHeader>Nombre Evento</TableHeader>
              <TableHeader>Sector</TableHeader>
              <TableHeader>Cantidad Ocupados</TableHeader>
              <TableHeader>Fecha</TableHeader>
              <TableHeader>Pago</TableHeader>
              <TableHeader>Estado</TableHeader>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((purchase, index) => (
              <tr key={index}>
                <TableCell>{purchase.tipoEvento}</TableCell>
                <TableCell>{purchase.eventName}</TableCell>
                <TableCell>{purchase.sector}</TableCell>
                <TableCell>{purchase.occupiedQuantity}</TableCell>
                <TableCell>{purchase.date}</TableCell>
                <TableCell>{purchase.payment}</TableCell>
                <TableCell>{purchase.status}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </UserDataContainer>
  );
};

export default ProfileData;
