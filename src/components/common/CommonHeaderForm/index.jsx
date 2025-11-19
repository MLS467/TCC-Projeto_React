import Logo from "@/components/common/Logo";
import {
  CommonHeaderWrapper,
  HeaderContent,
  TitleSection,
  RequiredFieldsNotice,
  RequiredFieldsText,
} from "./style";

const CommonHeaderForm = ({
  title,
  description,
  showRequiredNotice = false,
}) => {
  return (
    <CommonHeaderWrapper>
      <div>
        <Logo />
      </div>
      <HeaderContent>
        <TitleSection>
          <h1>{title}</h1>
          <span>{description}</span>
        </TitleSection>
      </HeaderContent>
      {showRequiredNotice && (
        <RequiredFieldsNotice>
          <RequiredFieldsText>
            <div>* Campos com asterisco são obrigatórios</div>
          </RequiredFieldsText>
        </RequiredFieldsNotice>
      )}
    </CommonHeaderWrapper>
  );
};

export default CommonHeaderForm;
