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
    padding-bottom: 2rem;

    a {
        width: 50%;
        text-align: center;
        color: #9fa9ba;
        margin-top: 2rem;
    }
    a:hover {
        color: var(--textcolor);
    }
`;





