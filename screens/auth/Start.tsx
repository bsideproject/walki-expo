import React from "react";
import StartContainer from "../../components/Auth/StartContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

const StartScreen = ({ navigation }: IAuthProps) => {
  return <StartContainer goNext={() => navigation.push("Home")} />;
};

export default StartScreen;
