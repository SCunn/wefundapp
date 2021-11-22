import React from 'react';
import { FaChevronRight, FaFolder } from 'react-icons/fa';
// Styles
import { Content } from './ChildFolder.styles';

const ChildFolder = ({text, callback}) => {
   return( 
        <Content type="button" onClick={callback}>
            <div className="chevron-right"><FaChevronRight /></div> 
            <div className="folder"><FaFolder /></div>
            <div className="text-right">{text}</div>
        </Content>

    )
};

export default ChildFolder;