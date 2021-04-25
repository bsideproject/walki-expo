import React from "react";
import ConfigContainer from "../../components/Auth/ConfigContainer";
import { SafeLayout } from "../../layouts/SafeLayout";
import { IAuthProps } from "../../navigators/AuthStackNavi";

/**
 * 초기설정
 * @param goNext
 */
const ConfigScreen = ({ navigation }: IAuthProps) => {
  return (
    <SafeLayout>
      <ConfigContainer goNext={() => navigation.push("Coach")} />
    </SafeLayout>
  );
};

export default ConfigScreen;
