import styled from 'styled-components';

export const MainText = styled.div`
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
    @media (max-width: 600px){
        max-width: 30ch;
    }
    @media (max-width: 500px){
        max-width: 13ch;
    }
`;