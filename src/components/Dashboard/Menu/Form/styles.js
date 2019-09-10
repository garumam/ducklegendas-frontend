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

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100px;
    padding-right:1rem;
`;
export const InputText = styled(TextField)`
    width: 49%;
    margin-bottom: 1rem;
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
        background: #00B8FF;
    }
`;