import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    width:100%;
    height:auto;
`;

export const Painel = styled.section`
    position: relative;
    width:100%;
    height:100%;
    padding:2.5rem;
    padding-top:4.5rem;
`;

export const MenuCustom = styled.section`
    display:flex;
    justify-content:space-between;
    align-content:center;
    align-items:center;
    width:100%;
    background:white;
    color:var(--textcolor);
    height:80px;
    padding-left:20px;
    padding-right:0;
    margin:0 auto;
    border-radius:0 0 5px 5px;
    p{
        font-size:1.09rem;
    }

`;

export const Divider = styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding:1rem;
        width:150px;
        height:100%;
        border-left: 1px solid rgb(238, 242, 251);
        cursor: pointer;
        text-align:center;
        span{
            font-size: .8rem;
        }
`;
// export const Avatar = styled.img`
//         position: relative;
//         border-radius: 50%;
//         width:48px;
//         height:48px;
//         margin-bottom:6px;
// `;

export const Welcome = styled.div`
    width:100%;
    height:220px;
    margin-top:2rem;
    background:var(--bgazul);
`;

export const Notification = styled.div`
    width: 35%;
    height: 600px;
    color:var(--textcolor);
    padding:0;
    div{
        padding:1.3rem;
        border-bottom:1px solid rgb(238, 242, 251);
    }
    h5{
        font-weight:700;
        margin:0;
    }
`;

export const Counters = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    text-align:center;
    justify-content:space-around;
    align-content:center;
    align-items:center;
    padding:1rem;
    div{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:60px;
        color:var(--textcolor);
        border-right: 2px solid rgb(238, 242, 251);
    }
    div:last-child{
        border:0;
    }
    div p{
        font-size:1.4rem;
        font-weight:800;
    }
    div span{
        color:#a4a5a9;
        font-size:.8rem;
        font-weight:500;
    }
`;

export const W62 = styled.div`
    width:62%;
`;