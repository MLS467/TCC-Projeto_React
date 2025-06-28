import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #2563eb;
  color: #fff;
  padding: 40px 0 0 0;
  font-family: inherit;
`;

export const FooterContent = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin-bottom: 24px;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const FooterDesc = styled.p`
  color: #eaf0fb;
  font-size: 17px;
  margin: 0;
  line-height: 1.5;
  max-width: 320px;
`;

export const FooterTitle = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  color: #eaf0fb;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterContactItem = styled.li`
  color: #eaf0fb;
  font-size: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const FooterDivider = styled.div`
  width: 90%;
  height: 1px;
  background: #eaf0fb33;
  margin: 16px auto 0 auto;
`;

export const FooterBottom = styled.div`
  text-align: center;
  color: #eaf0fb;
  font-size: 16px;
  padding: 12px 0 24px 0;
`;
