import { DataFieldStyle, FieldLabel, FieldValue } from "./style";

const DataField = ({ label, value, style }) => {
  return (
    <DataFieldStyle>
      <FieldLabel>{label}</FieldLabel>
      <FieldValue style={style}>{value}</FieldValue>
    </DataFieldStyle>
  );
};

export default DataField;
