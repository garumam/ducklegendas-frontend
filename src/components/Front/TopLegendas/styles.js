import styled from "styled-components";

export const TopLegendas = styled.section`
  width: 100%;
  height: 753px;
  color: var(--textcolor);
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
export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--corborda);

  p {
    font-size: 0.9rem;
    margin-bottom: 0;
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
  width: 70%;

  .descricao-legendas {
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
  }
  .progressbar {
    display: flex;
    height: 14px;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: var(--corborda);
    border-radius: 1rem;
    margin-top: 0.5rem;
  }
  .progressbar span {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    height: 14px;
    overflow: hidden;
    background: var(--bgazul);
  }

  .progressbar span:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
    opacity: 1;
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
  }

  @-webkit-keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }

  @keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }
`;
