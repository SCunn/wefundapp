import React from 'react';
import { FaChevronRight, FaChevronDown, FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
// Styles
import { Wrapper, Content } from './Folder.styles';

const Folder = ({ type }) => {
   return( 
   <Wrapper>
       
        <Content>
            <div className="chevron-right"><FaChevronRight /></div> 
            <div className="folder"><FaFolder /></div>
            <div className="text-right">{ type }</div>
        </Content>

      
    </Wrapper>)
};

export default Folder;