import styled from "styled-components";

export const Indice = styled.section`
    height: 953px;
    margin-bottom: var(--marginbottom);
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    max-height: 890px;

    a {
        min-width:33.33%;
        flex-grow:1;
        text-align: center;
        color: #9fa9ba;
        margin:0;
        padding:.7rem;
        border-bottom: 1px solid var(--corborda);
    }
    a:hover {
        color: var(--textcolor);
    }
`;





