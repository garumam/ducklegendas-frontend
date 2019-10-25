import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-between;
    padding: 0 0.5rem;
    flex-grow: 1;
    img {
        max-height: 150px;
        margin: 5px 0.15rem;
    }
    img:hover {
        box-shadow: 0px 0px 2px 3px #6759FF;
        cursor: pointer;
    }
    ::after {
        content: "";
        height: 0;
        margin: 0 0.15rem;
        flex-grow: 1;
    }
`;