import React from "react";
import { isLoggedInVar } from "../../common/apollo";
import StartContainer from "../../components/Auth/StartContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const StartScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <StartContainer
        goNext={() => {
          isLoggedInVar(true);
        }}
      />
    </SafeLayout>
  );
};

export default StartScreen;
