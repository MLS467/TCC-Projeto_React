import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
  }

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  font-size: 18px;
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export const Links = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  color: #888;
`;
