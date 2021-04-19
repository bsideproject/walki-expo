import React, { useCallback, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/native";
import { Alert, Text } from "react-native";

import TextLink from "../../components/TextLink";
import { INaviProps } from "../../navigators/AuthStackNavi";
import LoginButton from "./LoginButton";
// import { KakaoOAuthToken, login } from "@react-native-seoul/kakao-login";
// import { appleAuth } from "@invertase/react-native-apple-authentication";
interface SignInResult {
  accessToken: String;
}

interface SignInVars {
  social: Social;
  token: String;
}
enum Social {
  APPLE,
  KAKAO,
}
const GET_ACCESS_TOKEN = gql`
  query getToken($social: Social!, $token: String!) {
    signIn(social: $social, token: $token) {
      accessToken
      __typename
    }
  }
`;

/**
 * 로그인 버튼
 * @param currIndex
 * @param setCurrIndex
 */
const LoginContainer = ({ goNext }: INaviProps) => {
  //   const { loading, data } = useQuery<SignInResult, SignInVars>(
  //     GET_ACCESS_TOKEN,
  //     { variables: { social: Social.KAKAO, token: "0" } }
  //   );
  //   useEffect(() => {
  //     console.log("GET_ACCESS_TOKEN", data);
  //   }, [data]);
  //   const onPressKakaoLogin = useCallback(async (): Promise<void> => {
  //     const token: KakaoOAuthToken = await login();
  //     console.log("user is authenticated", token);
  //     if (typeof goNext === "function" && token) goNext();
  //   }, []);

  //   const onAppleButtonPress = useCallback(async () => {
  //     try {
  //       // Start the sign-in request
  //       const appleAuthRequestResponse = await appleAuth.performRequest({
  //         requestedOperation: appleAuth.Operation.LOGIN,
  //         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //       });
  //       // get current authentication state for user
  //       const credentialState = await appleAuth.getCredentialStateForUser(
  //         appleAuthRequestResponse.user
  //       );
  //       // use credentialState response to ensure the user is authenticated
  //       if (credentialState === appleAuth.State.AUTHORIZED) {
  //         console.log("user is authenticated", appleAuthRequestResponse);
  //         if (typeof goNext === "function") goNext();
  //       }
  //     } catch (error) {
  //       if (error.code === appleAuth.Error.CANCELED) {
  //         // login canceled
  //       } else {
  //         // login error
  //       }
  //     }
  //   }, []);

  return (
    <BottomContainer>
      <LoginButtonWrapper>
        <LoginButton
          type="kakao"
          onPress={() => {
            if (typeof goNext === "function") goNext();
          }}
        />
        <LoginButton
          type="apple"
          onPress={() => {
            if (typeof goNext === "function") goNext();
          }}
        />

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
