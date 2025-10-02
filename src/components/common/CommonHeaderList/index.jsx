import {
  CommonHeaderListWrapper,
  HeaderContent,
  TitleSection,
  RequiredFieldsNotice,
} from "./style";

const CommonHeaderList = ({
  title,
  description,
  showRequiredFieldsNotice = false,
}) => {
  return (
    <CommonHeaderListWrapper>
      <HeaderContent>
        <TitleSection>
          <h1>{title}</h1>
          <span className="description">{description}</span>
        </TitleSection>

        {showRequiredFieldsNotice && (
          <RequiredFieldsNotice>
            Campos com * são obrigatórios
          </RequiredFieldsNotice>
        )}
      </HeaderContent>
    </CommonHeaderListWrapper>
  );
};

export default CommonHeaderList;
