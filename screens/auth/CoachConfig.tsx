import React from "react";
import CoachContainer from "../../components/Auth/CoachContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const CoachConfigScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <CoachContainer goNext={() => navigation.push("Challenge")} />
    </SafeLayout>
  );
};

export default CoachConfigScreen;
