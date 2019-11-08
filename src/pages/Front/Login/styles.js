import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px;
  min-height: 90%;
`;

export const LoginSection = styled.section`
  width: 40vw;
  @media (max-width: 1000px) {
    width:80vw;
  }
`;

export const Error = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content:center;
  align-items:center;
  span{
    color:red;
    font-size:.9rem;
  }
  a{
    color: var(--textcolor);
    margin: .1rem 0;
    font-size:.9rem;
  }
`;
