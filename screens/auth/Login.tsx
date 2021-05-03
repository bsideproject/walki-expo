import React, { useState } from "react";
import GuideContainer from "../../components/Auth/GuideContainer";
import LoginContainer from "../../components/Auth/LoginContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const LoginScreen = ({ navigation }: IAuthProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <SafeLayout>
      <GuideContainer currIndex={currIndex} setCurrIndex={setCurrIndex} />
      {currIndex === 2 && (
        <LoginContainer goNext={() => navigation.push("Config")} />
      )}
    </SafeLayout>
  );
};

export default LoginScreen;
