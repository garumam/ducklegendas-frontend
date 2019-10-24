import styled from "styled-components";
import {Switch,TextField} from 'rmwc';



export const SwitchCustom = styled(Switch)`
        height: 60px;
        width:100%;
        display:flex;
        justify-content:center;
        color: rgba(0,0,0,.6);
        font-Weight: 600;
        font-Family: "Montserrat, sans-serif";   
        label{
            margin: 0;
            padding:auto;
        }
`;


export const FormHeader = styled.div`
        width:100%;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        justify-content:space-between;


    @media (min-width: 968px) {
        
    }
`;

export const InputSearch = styled(TextField)`
    border:0;
    border-radius:0;
    height:60px;
    width:100%;
    
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

