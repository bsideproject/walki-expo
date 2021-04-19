import React, { useState } from "react";
import GuideContainer from "../../components/Auth/GuideContainer";
import LoginContainer from "../../components/Auth/LoginContainer";

import { IAuthProps } from "../../navigators/AuthStackNavi";

const LoginScreen = ({ navigation }: IAuthProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <>
      <GuideContainer currIndex={currIndex} setCurrIndex={setCurrIndex} />
      {currIndex === 2 && (
        <LoginContainer goNext={() => navigation.push("Config")} />
      )}
    </>
  );
};

export default LoginScreen;
