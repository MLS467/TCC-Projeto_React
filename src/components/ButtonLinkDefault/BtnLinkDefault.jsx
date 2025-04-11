import React from "react";
import { ContainerButtonLink, LinkButton } from "./ButtonLinkDefault.style";

const BtnLinkDefault = ({ text, path }) => {
  return (
    <ContainerButtonLink>
      <div className="container">
        <LinkButton to={path} className="button">
          {text}
        </LinkButton>
      </div>
    </ContainerButtonLink>
  );
};

export default BtnLinkDefault;
