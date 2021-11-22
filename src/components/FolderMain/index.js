import React from 'react';
import { FaChevronRight, FaFolder } from 'react-icons/fa';
// Styles
import {  Content } from './FolderMain.styles';

const FolderMain = ({text, callback}) => {
    
   return( 
//    <Wrapper type="button" onClick={callback}>
       
        <Content type="button" onClick={callback}>
            <div className="chevron-right"><FaChevronRight /></div> 
            <div className="folder"><FaFolder /></div>
            <div className="text-right">{text}</div>
        </Content>

      
    // </Wrapper>
    )
};

export default FolderMain;