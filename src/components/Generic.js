import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px;
  height: 100vh;
`;

export const Eclipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: var(--bgazul);
  box-shadow: 0px 3px 8px 0px rgba(23, 24, 32, 0.1);
  color: white;
`;

export const Alert = styled.div`
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;

  ${props => props.type === 'primary'?
    `color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;`
    : props.type === 'success'?
    `color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;`
    : props.type === 'danger'?
    `color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;`
    : `color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;`
  }
`;