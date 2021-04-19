import React from "react";
import AlarmContainer from "../../components/Auth/AlarmContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

const AlarmConfigScreen = ({ navigation }: IAuthProps) => {
  return <AlarmContainer goNext={() => navigation.push("Start")} />;
};

export default AlarmConfigScreen;
