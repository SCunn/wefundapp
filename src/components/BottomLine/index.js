import React from "react";
// Styles
import { Wrapper, Content } from "./BottomLine.styles";

const BottomLine = ({text}) => {
 
  return (
      <Wrapper>
        <Content>
          <div className="bottom-line"></div>
          <div className="round-up">
              <div>Total Files: {text}</div>
              <div>Total Filesize: {text}</div>
          </div>
        </Content>


      </Wrapper>
    );
  };
  
  export default BottomLine;