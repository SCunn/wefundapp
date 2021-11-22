import React from "react";
// Styles
import { Wrapper, Content } from "./BottomLine.styles";

const BottomLine = ({text}) => {
 
  return (
      <Wrapper>
        <Content>
          <div className="bottom-line"></div>
          <div className="total">
              <div>Total Files: {text}</div>
          </div>
        </Content>


      </Wrapper>
    );
  };
  
  export default BottomLine;