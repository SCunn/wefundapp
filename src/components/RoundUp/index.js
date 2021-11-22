import React from "react";
// Styles
import { Content } from "./RoundUp.styles";

const RoundUp = ({text}) => {
 
    return (
      
          <Content>
            <div className="round-up">
                <div>Total Filesize: {text}</div>
            </div>
          </Content>
  
  
      
      );
    };
    
    export default RoundUp;