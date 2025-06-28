import styled from "styled-components";
import { MdDesktopWindows, MdStorage, MdCloud } from "react-icons/md";

const ImgCard = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 48px 0 rgba(44, 62, 80, 0.12);
  padding: 36px 32px 48px 32px;
  min-width: 520px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Line = styled.div`
  height: 18px;
  border-radius: 6px;
  background: #eceff1;
  margin-bottom: 10px;
  width: ${(props) => props.$w || "100%"};
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 18px;
`;

const IconBox = styled.div`
  flex: 1;
  background: ${(props) => props.$bg || "#eaf2fe"};
  border-radius: 12px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureImage = () => (
  <ImgCard>
    <Line $w="80%" />
    <Line $w="65%" />
    <Line $w="50%" />
    <IconRow>
      <IconBox $bg="#e3edfe">
        <MdDesktopWindows style={{ color: "#2563eb", fontSize: 38 }} />
      </IconBox>
      <IconBox $bg="#d1fadf">
        <MdStorage style={{ color: "#16a34a", fontSize: 38 }} />
      </IconBox>
      <IconBox $bg="#f3e8ff">
        <MdCloud style={{ color: "#a21caf", fontSize: 38 }} />
      </IconBox>
    </IconRow>
  </ImgCard>
);

export default FeatureImage;
