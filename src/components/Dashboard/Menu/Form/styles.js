import styled from "styled-components";
import { Form } from 'formik';
import {TextField} from '@rmwc/textfield';

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