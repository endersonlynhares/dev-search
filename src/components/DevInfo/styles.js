import styled from "styled-components";

export const DevContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 3.2rem;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors["base-card"]};
  gap: 3.8rem;

 div{
  @media(max-width: 700px){
    text-align: center;
  }

  img{
    width: 12rem;
    border-radius: 9999px;
  }
 }

  @media(max-width: 700px){
    flex-direction: column;
  }
`;

export const Infor = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      font-weight: bold;
      h2 {
        color: ${(props) => props.theme.colors["base-text-title"]};
        font-size: 2.8rem;
        margin-bottom: 0.4rem;
      }
      span {
        color: ${(props) => props.theme.colors["primary-500"]};
      }
    }

    span {
      color: ${(props) => props.theme.colors["base-text"]};
      font-size: 1.7rem;
    }
  }
`;

export const InforCommunity = styled.div`
  background: ${(props) => props.theme.colors["base-info"]};
  padding: 16px 56px;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  border-radius: 15px;
  gap: 2rem;
  color: ${(props) => props.theme.colors["base-text-title"]};
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    gap: 8px;
    @media(max-width: 700px){
      flex-direction: column;
    }

    span:nth-child(2){
      font-weight:bold;
    }

    @media(max-width: 700px){
      flex-direction: column;
    }

  }
  
`;

export const InforSocial = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 23px;
  margin-top:2rem; 

  div{
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 16px;
    color: ${props => props.theme.colors["base-text-info"]};
    @media(max-width: 700px){
      flex-direction: column;
    }
  }
`