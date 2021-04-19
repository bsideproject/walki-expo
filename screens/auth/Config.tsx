import React from "react";
import ConfigContainer from "../../components/Auth/ConfigContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

/**
 * 초기설정
 * @param goNext
 */
const ConfigScreen = ({ navigation }: IAuthProps) => {
  return <ConfigContainer goNext={() => navigation.push("Coach")} />;
};

export default ConfigScreen;
