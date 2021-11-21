import styled from 'styled-components';

export const Content = styled.button`
    padding: 0px 0 0 30%;

    color: #8f9ead;
    display: inline-flex;
    cursor: pointer;
    transition: all 0.3s;
    border: 0;
    background: none;
    
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