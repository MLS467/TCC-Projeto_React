import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardContent,
  PatientName,
  RecordDate,
  RecordId,
  CardIcon,
  CardHeader,
  CardDetails,
} from "./style";

const MedicalRecordCard = ({ id, name, date, onClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Data não informada";
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const id_formatted = id.toString().slice(0, 6).toUpperCase();

  return (
    <CardContainer as={Link} to={`/medical-records/${id}`} onClick={onClick}>
      <CardHeader>
        <CardIcon>📋</CardIcon>
        <RecordId>#{id_formatted}</RecordId>
      </CardHeader>

      <CardContent>
        <PatientName>{name}</PatientName>
        <CardDetails>
          <RecordDate>
            {date ? formatDate(date) : "Data não informada"}
          </RecordDate>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
};

export default MedicalRecordCard;
