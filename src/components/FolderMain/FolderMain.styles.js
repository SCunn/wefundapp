import styled from 'styled-components';

// export const  Wrapper = styled.div`
//     width: 40px;
//     padding: 0px 0 0 20%;
// `; 

export const Content = styled.button`
    width: 40px;
    padding: 0px 0 0 20%;
    
    color: #8f9ead;
    display: flex;
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
        font-weight: bolder;
    }

    :hover {
        opacity: 0.5;
    }
`;