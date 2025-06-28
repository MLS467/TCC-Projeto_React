import {
  CheckBoxWrapper,
  CheckBoxLabel,
  StyledCheckBox,
  CheckMark,
} from "./style";

const CheckBoxForm = ({
  title,
  handleInput = () => {},
  checked = false,
  ...props
}) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxLabel>
        <StyledCheckBox
          type="checkbox"
          onChange={handleInput}
          checked={checked}
          {...props}
        />
        <CheckMark />
        <span>{title}</span>
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default CheckBoxForm;
