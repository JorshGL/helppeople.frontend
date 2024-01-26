import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import axios from "axios";

const AdminCitizens = () => {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/Citizens`)
      .then((response) => {
        setCitizens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Nombre",
    },
    {
      field: "lastName",
      headerName: "Apellido",
    },
    {
      field: "documentTypeId",
      headerName: "Tipo de documento",
      width: 150,
      valueGetter: (params) => params?.row?.idDocumentType?.name,
    },
    {
      field: "idNumber",
      headerName: "Número de documento",
      width: 150,
    },
    {
      field: "birthDate",
      headerName: "Fecha de nacimiento",
      width: 150,
    },
    {
      field: "profession",
      headerName: "Profesión",
    },
    {
      field: "salaryAspiration",
      width: 150,
      headerName: "Salario aspiración",
    },
    {
      field: "email",
      width: 150,
      headerName: "Correo electrónico",
    }
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row items-center justify-end p-5 pt-10 w-full">
        <Typography variant="h3" color="primary" className="font-bold">
          Ciudadanos
        </Typography>
      </div>
      <div className="w-11/12">
        <DataGrid columns={columns} rows={citizens} />
      </div>
    </div>
  );
}

export default AdminCitizens;
