import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;
    max-height: 60vh;

    img {
        height: 150px;
        margin: 5px;
    }
    img:hover {
        box-shadow: 0px 0px 2px 3px #6759FF;
        cursor: pointer;
    }
    ::after {
        height: 0;
        flex-grow: 1;
        content: "";
    }
`;