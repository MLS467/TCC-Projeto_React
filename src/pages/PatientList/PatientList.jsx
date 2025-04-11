import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
  TableWrapper,
} from "./PatientList.Style";
import NewButton from "../../components/Button/Button";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaHospitalUser } from "react-icons/fa";
import SpinnerImg from "../../components/Spinner/Spinner";
import useRequest from "../../Hook/useRequest";
import { toast } from "react-toastify";

const PatientList = () => {
  const [data, setData] = useState([]);

  const { api } = useRequest();

  const endpointPatients = `${import.meta.env.VITE_API_USER_ENDPOINT}/flag`;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(endpointPatients);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao carregar pacientes", error);
        toast.error("Erro ao carregar pacientes");
      }
    })();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Idade</TableHeader>
                <TableHeader>Tipo</TableHeader>
                <TableHeader>Contato de emergência</TableHeader>
                <TableHeader>Ações</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableData>{item.name}</TableData>
                  <TableData>
                    {item.age} {item.age !== 1 ? "Anos" : "Ano"}
                  </TableData>
                  <TableData>
                    <FaHospitalUser /> {item.role}
                  </TableData>
                  <TableData>
                    <IoIosPhonePortrait /> {item.phone}
                  </TableData>
                  <TableData>
                    <NewButton
                      text="enviar"
                      path={`/form_triage/${btoa(item.id)}`}
                    />
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <SpinnerImg
          $widthSpinner="200px"
          $heightSpinner="200px"
          $alignItems="flex-start"
          $marginTop="100px"
        />
      )}
    </>
  );
};

export default PatientList;
