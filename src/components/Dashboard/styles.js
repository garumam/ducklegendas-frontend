import styled, {
    css
} from "styled-components";
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

export const Nav = styled.nav `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div `
    height: 48px;
    img {
        width: auto;
        max-height: 72px;
    }
`;

const sharedStyleA = css `
    display: flex;
    justify-content: center;
    align-items: center;
    color: white !important;
    font-size: .94rem;
    height: var(--hmenu);
    padding: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
`;

export const NavLinks = styled.ul `
    display: flex;
    flex-direction: column;
    align-itens: center;
    margin: 0;
    width: 100%;
    a{
        ${sharedStyleA}
    }
    a:hover, .is-active {
        background-color: rgba(240, 248, 255, 0.10);
        cursor: pointer;
    }
`;

