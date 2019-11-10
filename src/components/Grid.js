import styled from 'styled-components';

export const Container = styled.div`
    max-width:1200px;
    width:100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;
function getWidth(value){
    let width= value / 12 * 100;
    return `${width}%`;
}
export const Column = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px){
        flex: 0 0 ${({desktop}) => desktop && getWidth(desktop)};
        max-width: ${({desktop}) => desktop && getWidth(desktop)};
    }

    @media (max-width: 768px){
        flex: 0 0 ${({tablet}) => tablet && getWidth(tablet)};
        max-width: ${({tablet}) => tablet && getWidth(tablet)};
    }

    @media (max-width: 576px){
        flex: 0 0 ${({mobile}) => mobile && getWidth(mobile)};
        max-width: ${({mobile}) => mobile && getWidth(mobile)};
    }
`;
