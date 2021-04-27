import React from "react";
import { isLoggedInVar } from "../../common/apollo";
import StartContainer from "../../components/Auth/StartContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

const StartScreen = ({ navigation }: IAuthProps) => {
  return <StartContainer goNext={() => isLoggedInVar(true)} />;
};

export default StartScreen;
