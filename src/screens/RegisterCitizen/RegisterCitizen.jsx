import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { Save } from "@mui/icons-material";

function RegisterCitizen() {
  const [idDocumentTypes, setIdDocumentTypes] = useState([]);
  const [fetchingIdDocumentTypes, setFetchingIdDocumentTypes] = useState(false);
  const [data, setData] = useState({
    documentTypeId: "",
    idNumber: "",
    name: "",
    lastName: "",
    birthDate: "",
    profession: "",
    salaryAspiration: "",
    email: "",
  });

  const handleSubmit = () => {
    if (Object.values(data).some((value) => value === "")) {
      return;
    }
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/Citizens`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setFetchingIdDocumentTypes(true);
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/Citizens/GetIdDocumentTypes`)
      .then((response) => {
        setIdDocumentTypes(response.data);
        if (!data.documentTypeId)
          setData({ ...data, documentTypeId: response.data[0].id });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFetchingIdDocumentTypes(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5">
      <Typography variant="h4" color="primary">
        Registro
      </Typography>
      {fetchingIdDocumentTypes ? (
        <Typography variant="h6" color="primary">
          Cargando...
        </Typography>
      ) : (
        <FormControl className="flex items-center">
          <div className="grid items-center grid-cols-2 gap-4">
            <TextField
              required
              select
              label="Tipo de documento"
              value={data.documentTypeId}
              onChange={(e) =>
                setData({ ...data, documentTypeId: e.target.value })
              }
            >
              {idDocumentTypes.map((idDocumentType) => (
                <MenuItem key={idDocumentType.id} value={idDocumentType.id}>
                  {idDocumentType.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Número de documento"
              required
              value={data.idNumber}
              onChange={(e) => setData({ ...data, idNumber: e.target.value })}
            />
            <TextField
              label="Nombres"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextField
              label="Apellidos"
              required
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
            <DatePicker
              onChange={(e) => setData({ ...data, birthDate: e.format("YYYY-MM-DD") })}
              required
            />
            <TextField
              label="Profesión"
              required
              value={data.profession}
              onChange={(e) => setData({ ...data, profession: e.target.value })}
            />
            <TextField
              label="Aspiración salarial"
              required
              value={data.salaryAspiration}
              onChange={(e) =>
                setData({ ...data, salaryAspiration: e.target.value })
              }
            />
            <TextField
              label="Correo electrónico"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Button
              variant="contained"
              color="primary"
              className="col-span-2"
              startIcon={<Save />}
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </div>
        </FormControl>
      )}
    </div>
  );
}

export default RegisterCitizen;
