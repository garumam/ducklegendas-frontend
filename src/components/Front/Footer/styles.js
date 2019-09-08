import styled from "styled-components";

export const Rodape = styled.footer `
    position: relative;
    bottom:0;
    width: 100%;
    min-height: 170px;
    border-top: 1px solid rgba(255, 255, 255, 0.302);
    background: var(--bgazul);
    margin-top: var(--marginbottom);
    ul{
    display: flex;
    color: white;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.3rem;
    }
    ul li{
        padding: .5rem;
    }
    ul li a{
        font-weight: 600;
        font-size: .9rem;
        text-transform: uppercase;
        text-decoration: none;
    }
    ul li a:hover{
        color: white;
    }
`;


export const FooterBottom = styled.footer `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: var(--bgazul);
    text-transform: uppercase;
    border-top: 1px solid rgba(255, 255, 255, 0.302);

    span {
        color: white;
        font-size: .7rem;
        text-align: center;
    }

    img {
        width: 16px;
        height: 16px;
        margin-right: .3rem;
    }

`;




export const FooterLogo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:1.3rem;
    color: white;
    text-transform: uppercase;

    h5{
    font-weight: 600;
    font-size: 1.1rem;  
    }
    img {
        width: 90px;
        height: 90px;
        margin-bottom: 1.2rem;
    }
    
`;


/* inicio do botao to top */

export const ReturnToTop = styled.a `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    text-decoration: none;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    opacity: 0;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    &:hover {
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.2);
    }
        i {
        margin: 0 auto;
        position: relative;
        height: 30px;
        width: 30px;
        top: 10px;
        left: 10px;
        font-size: 28px;
        background:var(--bgazul) !important;
        color: white;
        border-radius: 50px;
        text-align: center;
    }
`;