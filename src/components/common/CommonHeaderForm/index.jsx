import Logo from "../Logo";
import { CommonHeaderWrapper, HeaderContent, TitleSection } from "./style";

const CommonHeaderForm = ({ title, description }) => {
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
    </CommonHeaderWrapper>
  );
};

export default CommonHeaderForm;
