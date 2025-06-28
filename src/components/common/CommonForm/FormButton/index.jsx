import { FiX, FiSend } from "react-icons/fi";
import { ButtonRow, CancelButton, SubmitButton } from "./style";

const FormButtons = ({ onCancel, onSubmit, loading }) => (
  <ButtonRow>
    <CancelButton type="button" onClick={onCancel}>
      <FiX size={22} /> Cancelar
    </CancelButton>
    <SubmitButton type="submit" onClick={onSubmit} disabled={loading}>
      <FiSend size={22} style={{ transform: "rotate(-10deg)" }} />
      Enviar
    </SubmitButton>
  </ButtonRow>
);

export default FormButtons;
