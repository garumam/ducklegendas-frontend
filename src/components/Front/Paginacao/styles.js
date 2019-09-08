import styled from "styled-components";

export const Paginacao = styled.section`
  width: 100%;
  height: 50px;
  margin-bottom: var(--marginbottom);

  & > .container > .row > .col-12 {
    padding: 0;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  width: 38px;
  height: 38px;
  text-align: center;
  border-radius: 50% !important;

  i {
    color: var(--textcolor);
    background: none !important;
    font-size: 32px;
  }
`;

export const MenuPaginacao = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;

  .borda-meio {
    min-width: 1px;
    height: 50px;
    background-color: rgba(82, 109, 249, 0.102);
  }

  & > a {
    width: 99.9%;
    color: var(--textcolor) !important;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    align-self: center;
    text-decoration: none;
    height: 100%;
    text-align: center;
  }
  & > a:hover {
    color: white !important;
    background: var(--bgazul);
  }

  & > a:hover > ${Arrow} > i {
    color: #009cff !important;
    background: white;
  }
  & > a:hover > ${Arrow} {
    background: white;
    color: #009cff !important;
  }
`;
