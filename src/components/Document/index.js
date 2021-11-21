import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
// Styles
import { Content } from './Document.styles';

const Document = ({text}) => {
    return( 
         <Content> 
             <div className="file"><FaFileAlt /></div>
             <div className="text-right">{text}</div>
         </Content>
 
     )
 };
 
 export default Document;