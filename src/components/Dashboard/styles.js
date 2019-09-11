import styled, {
    css
} from "styled-components";
import { SimpleTopAppBar } from "@rmwc/top-app-bar";

export const Header = styled.header`
    /* background:#6357ff; */
    background:#6759FF;
    width:220px;
    height:100vh;
    position:relative;
    color:white;
    text-align:center;
    border-right:1px solid rgba(255,255,255,0.2);
    img {
        width:40px;
        height:40px;
    }
`;




export const HeaderDashboard = styled(SimpleTopAppBar)`
    position: relative;
    height:70px;
    div{
        height:inherit;
    }
    .mdc-top-app-bar__title{
        font-size:1.2rem;
        font-weight:600;
        font-family:'Montserrat',sans-serif;

    }
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
    padding:24px;
`;

export const Nav = styled.nav `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
`;

export const Logo = styled.div `
    width:100%;
    height: 70px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid rgba(255,255,255,0.2);
    img {
        width: auto;
        max-height: 72px;
    }
`;

const sharedStyleA = css `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white !important;
    font-size: .8rem;
    height: 50px;
    padding: 1rem;
    padding-left:1.4rem;
    text-transform: uppercase;
    text-decoration: none;
`;

export const MenuLogout = styled.div`
    width:100%;
    border-top: 1px solid rgba(255,255,255,0.2);
    ${sharedStyleA}
    :hover {
        background-color: rgba(240, 248, 255, 0.10);
        cursor: pointer;
    }
`;

export const NavLinks = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    li{
        width:100%;
        align-self:flex-start;
    }
    a{
        ${sharedStyleA}
    }
    a:hover, .is-active {
        background-color: rgba(240, 248, 255, 0.10);
        cursor: pointer;
    }
`;
