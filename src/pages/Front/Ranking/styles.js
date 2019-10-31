import styled from "styled-components";

export const Ranking = styled.section`
    height: 700px;
    margin-bottom: var(--marginbottom);
`;

export const More = styled.div`
    width: 100%;
    text-align: right;
    padding: .7rem;
    position: absolute;
    bottom:0;
    border-top: 1px solid var(--corborda);

    a {
        color: #9fa9ba;
        font-size:.9rem;
    }
    a:hover {
        color: var(--textcolor);
    }
`;

export const UsersContainer = styled.div`
    max-height: 590px;
    width: 100%;
    padding: 0 1.5rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--corborda);

  p {
    font-size: 0.9rem;
    margin-bottom: 0;
    color: var(--textcolor);
  }
  span {
    font-size: 0.8rem;
    color: #9fa9ba;
  }
  span:last-child {
    margin-bottom: 0;
  }
  img {
    width: 47px;
    height: 47px;
    background: #dedede;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .top {
      padding: 0.6rem;
    }
  }
`;

export const GrupoLegendas = styled.div`
  width: 100%;


  .descricao-legendas {
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
  }
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