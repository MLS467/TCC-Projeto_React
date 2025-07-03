import {
  DocumentWrapper,
  DocumentHeader,
  HeaderIcon,
  HeaderTitle,
  DataGrid,
} from "./style";

const DocumentCard = ({ title, children }) => {
  return (
    <DocumentWrapper>
      <DocumentHeader>
        <HeaderIcon />
        <HeaderTitle>{title}</HeaderTitle>
      </DocumentHeader>

      <DataGrid>{children}</DataGrid>
    </DocumentWrapper>
  );
};

export default DocumentCard;
