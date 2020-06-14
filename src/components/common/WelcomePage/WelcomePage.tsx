import React from "react";
import {
  BackgroundArea,
  Circle,
  CirclesArea, WelcomeTitle,
  WelcomeArea,
  Body,
  Enter
} from "../../../styledComponents/common/WelcomePage/StyledWelcomePage";

const WelcomePage = () => {
  return (
    <BackgroundArea>
      <CirclesArea>
        <Circle left={25} aDelay={0} size={80}/>
        <Circle left={10} aDelay={2} size={40} aDuration={12}/>
        <Circle left={70} aDelay={4} size={35}/>
        <Circle left={40} aDelay={0} size={60} aDuration={18}/>
        <Circle left={65} aDelay={0} size={70}/>
        <Circle left={75} aDelay={3} size={110}/>
        <Circle left={35} aDelay={7} size={150}/>
        <Circle left={50} aDelay={15} size={35} aDuration={45}/>
        <Circle left={20} aDelay={2} size={45} aDuration={35}/>
        <Circle left={85} aDelay={0} size={150} aDuration={11}/>
      </CirclesArea>
      <WelcomeArea>
        <WelcomeTitle>
          Welcome!
        </WelcomeTitle>
        <Body>This is my simple web application.</Body>
        <Enter to={'/posts'}>
          ENTER
        </Enter>
      </WelcomeArea>
    </BackgroundArea>
  )
}

export default WelcomePage;