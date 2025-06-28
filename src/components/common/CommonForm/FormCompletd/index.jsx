import { FormContentStyle, FormStyle } from "./style";

const FormCompleted = ({ children, handleSubmit = () => {} }) => {
  return (
    <FormContentStyle>
      <FormStyle onSubmit={handleSubmit}>{children}</FormStyle>
    </FormContentStyle>
  );
};

export default FormCompleted;
