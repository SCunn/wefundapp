import React from 'react';
import { FaChevronRight, FaFolder } from 'react-icons/fa';
// Styles
import { Content } from './Folder.styles';

const Folder = ({text, callback}) => {
   return( 
        <Content type="button" onClick={callback}>
            <div className="chevron-right"><FaChevronRight /></div> 
            <div className="folder"><FaFolder /></div>
            <div className="text-right">{text}</div>
        </Content>

    )
};

export default Folder;