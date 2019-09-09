import styled from "styled-components";
import { SimpleTopAppBar } from "@rmwc/top-app-bar";

export const Header = styled.header`
    /* background:#6357ff; */
    background:#00b8ff;
    width:220px;
    height:100vh;
    position:relative;
    color:white;
    text-align:center;
    padding:1rem;
    img {
        width:40px;
        height:40px;
    }
`;

export const HeaderDashboard = styled(SimpleTopAppBar)`
    position: relative;
    height:65px;
`;

export const Container = styled.div`
    display:flex;
    width:100%;
    height:auto;
`;
export const ContainerDashboard = styled.div`
    display:flex;
    width:100%;
    height:calc(100vh - 65px);
    padding-top:64;
`;

