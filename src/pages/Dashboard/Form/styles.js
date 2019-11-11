import styled from "styled-components";
import { Form } from 'formik';
import {TextField, Select, Checkbox} from 'rmwc';

export const CustomForm = styled(Form)`
    max-height: calc(100vh - 180px);
    justify-content: space-between;
    flex-wrap: wrap;
    
    input {
        margin: 0 !important;
        font-weight: 700;
        border: 1px solid var(--corborda);
        border-radius: 4px;
        padding: 20px 16px 6px !important;
    }
`;

export const InputText = styled(TextField)`
    width: 49%;
    margin-bottom: 1rem;
    
    label:not(:disabled){
      font-family: 'Montserrat', sans-serif;
      font-size:.8rem;
      font-weight:600;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
`;

export const SelectCustom = styled(Select)`
    width: 49%;
   
    margin-bottom: 1rem;
    label:not(:disabled){
        color:rgba(0,0,0,.6) !important;
        font-family: 'Montserrat', sans-serif;
        font-size:.8rem;
        font-weight:600;
    }
    option{
        font-weight:600;
    }
    .mdc-select__native-control{
        font-weight:600 !important;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
`;

export const InputCheckbox = styled(Checkbox)`
    width: 100%;
    margin-bottom: 1rem;
    
    label:not(:disabled){
        font-family: 'Montserrat', sans-serif;
        font-size:.8rem;
        margin-bottom:0;
        font-weight:600;
    }
`;

export const DivCustom = styled.div`
    width: 49%;
    input{
        padding: 1rem !important;
        font-size:.8rem;
        height:56px;
    } 
    @media (max-width: 600px) {
      width: 100%;
    }
`;

export const HeaderCard = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    height:20.76%;
    max-height:60px;
    min-height:60px;
    padding:0 1rem;
    
    h2{
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0;
      color: var(--textcolor);
    }

    button{
      width:45px;
      height:45px;
      background: var(--mdc-theme-primary);
    }

    @media (max-width: 410px) {
      h2 {
        font-size: 1rem;
      }
      button {
        margin:0;
      }
    }

`;


export const Error = styled.div`
  display:flex;
  width:100%;
  position: relative;
  flex-direction:column;
  background:#f8d7da;
  border-color:#f5c6cb;
  border-radius:.25rem;
  margin-bottom:1rem;
  padding:1rem;

  :empty {
    display: none;
  }

  span{
    color:#721c24;
    font-size:.9rem;
  }
  a{
    color: var(--textcolor);
    margin: .1rem 0;
    font-size:.9rem;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    width: 150px;
    padding: 1rem 1rem 1rem 0;
  }
`;