import styled, {
    css
} from "styled-components";

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
export const Header = styled.header `
    width: 100%;
    display: block;
    height: var(--hmenu);
    background: var(--bgazul);
    box-shadow: 0px 3px 8px 0px rgba(23, 24, 32, 0.1);
    font-weight: 600;
    z-index: 999;
    position: fixed;
`;
export const Logo = styled.div `
    display:flex;
    align-items:center;
    a {
        text-decoration: none;
        letter-spacing: 1px;
        color: white;
        text-transform: uppercase;
        margin-left: 1rem;
        
        @media screen and (max-width:360px) {
           display: none;
        }
    }

    img {
        width: auto;
        max-height: 52px;
    }
`;

export const Nav = styled.nav `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: var(--hmenu);
    z-index: 999;
`;

export const NavLinks = styled.ul `
    display: flex;
    justify-content: space-around;
    margin: 0;
    a{
        ${sharedStyleA}
    }
    a:hover, .is-active {
        background-color: rgba(240, 248, 255, 0.10);
        cursor: pointer;
    }
    @media screen and (max-width:992px) {
         overflow-x: hidden;
         overflow-y: auto;
         position: fixed;
         width: 100%;
         height: 100vh;
         background: var(--textcolor);
         right: -100%;
         top: 0;
         text-align: center;
         padding: 80px 0;
         line-height: normal;
         transition: 0.7s;
         flex-direction: column;
         justify-content: start;
     }
`;

export const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    top: 80px;
    width: 100vh;
    border-radius: 0 !important;
    border: none !important;
    background: var(--bgazul);
     a {
     width: 100%;
     height: 50px;
     text-decoration: none;
     display: block; 
    }
`;

export const Dropdown = styled.div`
    ${sharedStyleA}
    
    &:hover {
        background-color: rgba(240, 248, 255, 0.10);
    }
    &:hover ${DropdownMenu} {   
        display: block;
    }

     label {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        min-height: 100%;
        height: auto !important;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    @media screen and (max-width:992px) {
        padding: 0;
    
        &:hover ${DropdownMenu} {
            display: none;
        }

        ${DropdownMenu} {
            background: rgb(236, 236, 236);
        }

        ${DropdownMenu} a {
            color: #313450 !important;
        }
        
    }

    
    label span {
     font-size: .94rem;
    }
`;


export const InputDropdownMenu = styled.input`
    display: none;
     @media screen and (max-width:992px) {
     &:checked ~ ${DropdownMenu}{
        display: block;
        width:100%;
        max-height:300px;
        transition: max-height 250ms;
      }
       
    }
`;

export const Mobile = styled.div`
    position: absolute;
    display: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index:1;
    width: 40px;
    height: 40px;
    right: 40px;

    div {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: white;
        cursor: pointer;
        display: none;
        transition: all 0.4s ease;
    }
    div:before , div:after{
        content: '';
        position: absolute;
        z-index:1;
        top: -10px;
        width:100%;
        height:2px;
        background:inherit;
    }
    div:after{
        top: 10px; 
    }
    @media screen and (max-width:992px) {
        div {
           display: block;
        }
    }
     
`;

export const CHK = styled.input`
    position: absolute;
    opacity:0;
    height:40px;
    width:40px;
    right:40px;
    z-index: 2;
    @media screen and (max-width:992px) {
        &:checked~${NavLinks} {
            right: 0;
        }
        &:checked + ${Mobile} > div{
            transform: rotate(135deg);
        }
        &:checked + ${Mobile} > div:before , &:checked + ${Mobile} > div:after{
            top: 0;
            transform: rotate(90deg);
        }
     }
     
`;