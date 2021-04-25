import React from "react";
import ChallengeContainer from "../../components/Auth/ChallengeContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const ChallengeConfigScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <ChallengeContainer goNext={() => navigation.push("Alarm")} />
    </SafeLayout>
  );
};

export default ChallengeConfigScreen;
