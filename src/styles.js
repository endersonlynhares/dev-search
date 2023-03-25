import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  max-width: 75rem;
  margin: 0 auto;
 
  main{
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    header{
      color: ${props => props.theme.colors['header-text']};
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1{
        font-size: 3rem;
      }

      button{
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        gap: 1.5rem;
        transition: all 0.3s;
        cursor: pointer;

        &:hover{
          filter: brightness(50%);
        }

      }
      
    }
  }

`