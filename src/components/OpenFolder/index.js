import React from 'react';
import { FaChevronDown, FaFolderOpen } from 'react-icons/fa';
// Styles
import {  Content } from './OpenFolder.styles';

const OpenFolder = ({text, callback}) => {
    
   return( 
    
        <Content type="button" onClick={callback}>
            <div className="chevron-right"><FaChevronDown /></div> 
            <div className="folder"><FaFolderOpen /></div>
            <div className="text-right">{text}</div>
        </Content>
      
    )
};

export default OpenFolder;