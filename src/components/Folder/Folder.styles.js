import styled from 'styled-components';

export const  Wrapper = styled.div`
    
`; 

export const Content = styled.div`
    padding: 0px 0 0 20%;
    color: #8f9ead;
    display: inline-flex;
    cursor: pointer;
    transition: all 0.3s;
    
    .folder {
        font-size: xx-large;
    }

    .chevron-right {
        padding: 0.5em;
    }

    .text-right {
        padding: 0.5em 0.5em 0.5em 1em;
        font-weight: bold;
    }

    :hover {
        opacity: 0.5;
    }
`;