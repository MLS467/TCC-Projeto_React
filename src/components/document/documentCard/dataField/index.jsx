import { DataFieldStyle, FieldLabel, FieldValue } from "./style";

const DataField = ({ label, value }) => {
  return (
    <DataFieldStyle>
      <FieldLabel>{label}</FieldLabel>
      <FieldValue>{value}</FieldValue>
    </DataFieldStyle>
  );
};

export default DataField;
