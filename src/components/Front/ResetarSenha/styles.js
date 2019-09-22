import styled from 'styled-components';

export const Login = styled.section`
  width: 50%;
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