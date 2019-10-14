import styled from "styled-components";
import { Form } from 'formik';
import {TextField, Select} from 'rmwc';

export const CustomForm = styled(Form)`
    justify-content: space-between;
    input {
        margin: 0 !important;
        padding: 20px 16px 6px !important;
    }
`;

export const InputText = styled(TextField)`
    width: 49%;
    margin-bottom: 1rem;
    
    label:not(:disabled){
        font-family: 'Montserrat', sans-serif;
        font-size:.8rem;
    }
`;

export const InputSearch = styled(TextField)`
    border:0;
    border-radius:0;
    height:60px;
    margin-left: 2rem;
    margin-right: 1rem;
    input{
        border-bottom:0;
    }
    
    label:not(:disabled){
        font-family: 'Montserrat', sans-serif;
        font-size:.9rem;
        margin:0;
        top:23px;
        font-weight:600;
    }
`;

export const SelectCustom = styled(Select)`
    width: 49%;
   
    margin-bottom: 1rem;
    label:not(:disabled){
        color:rgba(0,0,0,.6) !important;
        font-family: 'Montserrat', sans-serif;
        font-size:.8rem;
    }
    option{
        font-weight:600;
    }
    .mdc-select__native-control{
        font-weight:600 !important;
    }
`;

export const DivCustom = styled.div`
    input{
        padding: 1rem !important;
        font-size:.8rem;
        height:56px;
    } 
`;

export const HeaderCard = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
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