import styled from "styled-components";
import { Form } from 'formik'

export const CustomForm = styled(Form)`
    justify-content: space-between;
    input {
        margin: 0px !important;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100px;
    padding-right:1rem;
`;