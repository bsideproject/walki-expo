import React from "react";
import ChallengeContainer from "../../components/Auth/ChallengeContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

const ChallengeConfigScreen = ({ navigation }: IAuthProps) => {
  return <ChallengeContainer goNext={() => navigation.push("Alarm")} />;
};

export default ChallengeConfigScreen;
