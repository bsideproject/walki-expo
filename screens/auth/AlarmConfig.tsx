import React from "react";
import AlarmContainer from "../../components/Auth/AlarmContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

const AlarmConfigScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <AlarmContainer goNext={() => navigation.push("Start")} />
    </SafeLayout>
  );
};

export default AlarmConfigScreen;
