import styled from "styled-components";

export const ContainerButtonAnimation = styled.div`
/* border: 1px solid #333; */
display: flex;
width: 100%;
height: 70px !important;
justify-content: center;
align-items: center !important;

.button {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.25rem;
  border-radius: 5px;
  color: ${props => props.theme.color.primary};
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

}
.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  z-index: -2;
  cursor: pointer;
}
.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: ${props => props.theme.color.primary};
  transition: all 0.3s;
 border-radius: 5px;
  z-index: -1;
  cursor: pointer;
}
.button:hover {
  color: #fff;
  cursor: pointer;
}
.button:hover:before {
  width: 100%;
  cursor: pointer;
}


`; 