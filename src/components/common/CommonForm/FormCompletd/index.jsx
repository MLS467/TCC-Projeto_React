import { FormContentStyle, FormStyle } from "./style";
import { palette } from "@/constant/colors";

const FormCompleted = ({ children, handleSubmit = () => {} }) => {
  return (
    <FormContentStyle>
      <div
        style={{
          width: "100%",
          padding: "20px 0",
          margin: "0 auto",
          borderRadius: "20px 20px 0px 0px",
          backgroundColor: palette[500],
        }}
      ></div>
      <FormStyle onSubmit={handleSubmit}>{children}</FormStyle>
    </FormContentStyle>
  );
};

export default FormCompleted;
