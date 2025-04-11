import  { useEffect, useState } from "react";
import SpinnerImg from "../../components/Spinner/Spinner";
import {
  TableList,
  TableHeadList,
  TableHeaderList,
  TableRowList,
  TableDataList,
  TableBodyList,
  TableWrapperList,
} from "../../components/tableList/TableStructure";
import Button from "../../components/Button/Button";
import useRequest from "../../Hook/useRequest";

const PatientTriageList = () => {
  const { api } = useRequest();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const endpoint = `${import.meta.env.VITE_API_PATIENT_ENDPOINT}Completed`;
        const response = await api.get(endpoint);
        setData(response?.data);
      } catch (error) {
        setData([]);
      }
    })();
  }, []);

  return (
    <>
      {data?.length > 0 ? (
        <TableWrapperList>
          <div style={{ textAlign: "center" }}>
            <h1>Listagem de pacientes</h1>
          </div>
          <TableList>
            <TableHeadList>
              <TableRowList>
                <TableHeaderList value="Nome" />
                <TableHeaderList value="idade" />
                <TableHeaderList value="Tipo sanguíneo" />
                <TableHeaderList value="Pressão arterial" />
                <TableHeaderList value="Frequência cardíaca" />
                <TableHeaderList value="Saturação de oxigênio" />
                <TableHeaderList value="Detalhes" />
              </TableRowList>
            </TableHeadList>
            <TableBodyList>
              {data.map((item, index) => (
                <TableRowList key={index}>
                  <TableDataList value={item.user.name} />
                  <TableDataList value={item.user.age} />
                  <TableDataList value={item.blood_type} />
                  <TableDataList value={`${item.blood_pressure} mmHg`} />
                  <TableDataList value={`${item.heart_rate} bpm`} />
                  <TableDataList value={`${item.oxygen_saturation} %`} />

                  <TableDataList
                    value={
                      <Button
                        path={`/form_consultation/${btoa(item.id)}`}
                        text="Consultar"
                      />
                    }
                  />
                </TableRowList>
              ))}
            </TableBodyList>
          </TableList>
        </TableWrapperList>
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

export default PatientTriageList;
