import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background: white;
  border-radius: 5px;
  color: black;
  position: fixed;
  z-index: 999;
  max-height: 100%;

  h5 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
    font-weight: 700;
  }
  .content {
    font-size: 0.9rem;
    padding: 1rem;
  }
  .actions {
    border-top: 1px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
    text-align: right;
  }
  .actions button {
    background: var(--mdc-theme-primary);
    border: 0;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1;
    color: white;
  }
`;
