import styled from 'styled-components';

export const SideBar = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow-y: scroll;
  background-color: #383f53;
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const MainContainer = styled.div`
  padding: 6% 0 2% 2%;
  @media screen and (max-width: 768px) {
    padding: 20% 0 2% 5%;
  }
`;

export const HeaderContainer = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  background-color: red;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;