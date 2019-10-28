import styled from "styled-components";

// .alert{
//     /* color: var(--textcolor); */
//     font-size: .9rem;
//     padding-left: 1rem;
//     text-align: center;
// }
export const Ordenar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0px 0px 0px 1px var(--corborda);
  margin-right: 1rem;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center;
  -webkit-background-size: 8px 10px;
  background-size: 8px 10px;
  -moz-appearance: none;
  -webkit-appearance: none;

  label {
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--textcolor);
    margin: 0 auto;
    padding: 10px 10px;
  }
`;

export const SelectBusca = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  height: 34px;

  select {
    width: 100%;
    height: 34px;
    outline: none;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--textcolor);
    margin: 0 auto;
    overflow: auto;
  }

  select:focus {
    outline: none;
  }

  select > option {
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--textcolor);
    padding-left: 0.3rem;
  }

  input {
    padding: 10px 10px;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0px 0px 0px 1px var(--corborda);
    background: white;
    outline: none;
    border: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--textcolor);
    margin: 0 auto;
  }

  input::placeholder {
    color: var(--textcolor);
    opacity: 1;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  min-height: 0;
  max-height: 1080px;
  padding-left: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Post = styled.div`
  width: 22.6%;
  margin-right: 1rem;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
  min-height: 0;

  & > a {
    text-decoration: none;
  }

  .topo-card {
    display:flex;
    justify-content: center;
    align-items:center;
    height: 32px;
    text-align: center;
    background: var(--bgazul);
  }

  .topo-card span {
    font-size: 0.6rem;
  }

  .subtitle-card span {
    font-size: 0.8rem;
  }

  .info-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 40px;
  }

  .info-card span {
    text-decoration: none;
    font-size: 0.72rem;
    color: #898a8f;
    font-weight: 400;
    font-style: italic;
  }

  .card-media {
    background-color: azure;
    height: 240px;
    background-repeat: repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-origin: padding-box;
    background-attachment: scroll;
    margin-bottom: 0.7rem;
  }

  .card-media img {
    width: 100%;
    height: 240px;
  }

  .title-card,
  .subtitle-card {
    text-align: left;
    padding-left: 1rem;
    color: var(--textcolor);
  }
`;

export const LegendasContainer = styled.section`
  width: 100%;
  height: 1177px;
  margin-bottom: var(--marginbottom);

  @media (max-width: 768px) {
    ${SelectBusca} {
      width: 100%;
      padding-right: 1.9rem;
      position: absolute;
      top: 80px;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    ${Ordenar} {
      margin: 0;
      margin-bottom: 1rem;
    }

    ${Box} {
      position: relative;
      top: 110px;
      max-height: calc(1080px - 110px);
    }

    ${Post} {
      width: 46%;
    }
  }

  @media (min-width: 769px) {
    ${Post}:nth-child (4n+0) {
      margin-right: 0;
    }

    ${Box} {
      padding-left: 0.9rem;
    }
  }

  @media (max-width: 479px) {
    ${Post} {
      width: 45% !important;
    }
  }

  @media (max-width: 431px) {
    ${Post} {
      min-width: 94%;
    }
  }
`;
