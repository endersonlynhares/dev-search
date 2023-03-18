import styled from "styled-components";

export const SearchContainer = styled.form`
  background-color: ${props => props.theme.colors['base-card']};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  border-radius: 15px;

  div{
    display: flex;
    align-items: inherit;
    gap: 2rem;
    flex: 1;

    svg{
      color: ${props => props.theme.colors['primary-500']};
    }

    input{
      color: ${props => props.theme.colors['base-text']};
      width: 100%;
      font-size: 2rem;

      @media(max-width: 700px){
        font-size: 1.5rem;
      }

    }

  }

  button{
    background-color: ${props => props.theme.colors['primary-500']};
    padding: 1.3rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 1.6rem;
  }

`