import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/native";
import { Alert, Text, Platform } from "react-native";
import { INaviProps } from "../../navigators/AuthStackNavi";
import TextLink from "../../components/TextLink";
import LoginButton from "./LoginButton";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SIGNIN_QUERY, SIGNUP_MUTATION } from "../../queries";
import { SignIn, SignInVariables } from "../../__generated__/SignIn";
import { SignUp, SignUpVariables } from "../../__generated__/SignUp";
import { Social } from "../../__generated__/globalTypes";
import { tokenVar, isLoggedInVar } from "../../common/apollo";
import AsyncStorage from "@react-native-community/async-storage";
import { KakaoOAuthToken, login } from "@react-native-seoul/kakao-login";
import { appleAuth } from "@invertase/react-native-apple-authentication";

/**
 * 로그인 버튼
 * @param currIndex
 * @param setCurrIndex
 */
const LoginContainer = ({ goNext }: INaviProps) => {
  const [signUp, { data: signUpData }] = useMutation<SignUp, SignUpVariables>(
    SIGNUP_MUTATION
  );
  const [signIn, { data: signInData }] = useLazyQuery<SignIn, SignInVariables>(
    SIGNIN_QUERY
  );

  useEffect(() => {
    if (signInData?.signIn?.accessToken) {
      console.log("signIn Success : " + signInData.signIn.accessToken);
      AsyncStorage.setItem("token", signInData.signIn.accessToken);
      tokenVar(signInData.signIn.accessToken);
      // 페이지 이동
      if (typeof goNext === "function") goNext();
    }
  }, [signInData]);

  const onPressKakaoLogin = useCallback(async (): Promise<void> => {
    login()
      .then((token: KakaoOAuthToken) => {
        signUp({
          variables: { social: Social.KAKAO, token: token.accessToken },
        })
          .then((r) => console.log("signUpSuccess: " + r))
          .catch((e) => console.log("signUpError: " + e))
          .finally(() => {
            signIn({
              variables: { social: Social.KAKAO, token: token.accessToken },
            });
          });
      })
      .catch((e) => console.log("onPressKakaoLogin error", e));
  }, []);
  const onAppleButtonPress = useCallback(async (): Promise<void> => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      signUp({
        variables: {
          social: Social.APPLE,
          token: appleAuthRequestResponse.identityToken as string,
        },
      })
        .then((r) => console.log("signUpSuccess: " + r))
        .catch((e) => console.log("signUpError: " + e))
        .finally(() => {
          signIn({
            variables: {
              social: Social.APPLE,
              token: appleAuthRequestResponse.identityToken as string,
            },
          });
        });
    }
  }, []);
  return (
    <BottomContainer>
      <LoginButtonWrapper>
        <LoginButton type="kakao" onPress={onPressKakaoLogin} />
        {Platform.OS === "ios" && (
          <LoginButton type="apple" onPress={onAppleButtonPress} />
        )}

        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{
            marginBottom: 42,
            letterSpacing: 0.16,
            lineHeight: 15,
            fontSize: 12,
            color: "#828282",
            textAlign: "center",
          }}
        >
          walki의{" "}
          <TextLink onPress={() => Alert.alert("이용약관")}>이용약관</TextLink>
          과{" "}
          <TextLink onPress={() => Alert.alert("개인정보처리방침")}>
            개인정보처리방침
          </TextLink>
          을 읽고 이해했으며{"\n"}그에 동의함을 확인합니다.
        </Text>
      </LoginButtonWrapper>
    </BottomContainer>
  );
};

export default LoginContainer;

const LoginButtonWrapper = styled.View`
  margin: 16px 37px;
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
