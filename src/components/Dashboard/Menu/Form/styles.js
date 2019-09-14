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
        color:rgba(0,0,0,.6) !important;
        font-family: 'Montserrat', sans-serif;
        font-size:.8rem;
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
        padding: 10px 16px !important;
        font-size:.8rem;
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