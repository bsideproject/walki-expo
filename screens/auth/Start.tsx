import React from "react";
import StartContainer from "../../components/Auth/StartContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const StartScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <StartContainer goNext={() => navigation.push("Home")} />
    </SafeLayout>
  );
};

export default StartScreen;
