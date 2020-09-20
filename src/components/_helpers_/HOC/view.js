import styled from 'styled-components';

export const SideBar = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  background-color: #6C757D;
  @media screen and (max-width: 768px) {
    z-index: 1;
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
  z-index: 2;
  position: fixed;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  background-color: #6C757D;
  color: #FFF;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;