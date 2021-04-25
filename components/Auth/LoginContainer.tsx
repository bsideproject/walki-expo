import React, { useCallback, useEffect } from "react";
import styled from "@emotion/native";
import { Alert, Text } from "react-native";
import { INaviProps } from "../../navigators/AuthStackNavi";
import TextLink from "../../components/TextLink";
import LoginButton from "./LoginButton";
import { useLazyQuery } from "@apollo/client";
import { GET_TOKEN_QUERY } from "../../queries";
import {
  getToken,
  getToken_signIn,
  getTokenVariables,
} from "../../__generated__/getToken";
import { Social } from "../../__generated__/globalTypes";
import { tokenVar } from "../../common/apollo";
import AsyncStorage from "@react-native-community/async-storage";
import { KakaoOAuthToken, login } from "@react-native-seoul/kakao-login";
import {
  appleAuth,
  AppleRequestResponse,
} from "@invertase/react-native-apple-authentication";

/**
 * 로그인 버튼
 * @param currIndex
 * @param setCurrIndex
 */
const LoginContainer = ({ goNext }: INaviProps) => {
  const [socialType, setSocialType] = React.useState<Social>(Social.KAKAO);
  const [socialToken, setSocialToken] = React.useState<string>("");
  const [getTokenData, { loading, data }] = useLazyQuery<
    getToken,
    getTokenVariables
  >(GET_TOKEN_QUERY);

  useEffect(() => {
    if (data?.signIn?.accessToken) {
      AsyncStorage.setItem("token", data.signIn.accessToken);
      tokenVar(data.signIn.accessToken);
      // 페이지 이동
      if (typeof goNext === "function") goNext();
    }
  }, [data]);

  const onPressKakaoLogin = useCallback(async (): Promise<void> => {
    setSocialType(Social.KAKAO);
    login().then((token: KakaoOAuthToken) => {
      getTokenData({
        variables: { social: Social.KAKAO, token: token.accessToken },
      });
    });
  }, []);

  const onAppleButtonPress = useCallback(async () => {
    try {
      const appleAuthRequestResponse: AppleRequestResponse = await appleAuth.performRequest(
        {
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        }
      );
      // get current authentication state for user
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user
      );
      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        console.log("user is authenticated", appleAuthRequestResponse);
        if (appleAuthRequestResponse.identityToken) {
          getTokenData({
            variables: {
              social: Social.APPLE,
              token: appleAuthRequestResponse.identityToken,
            },
          });
        }
      }
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        // login canceled
      } else {
        // login error
      }
    }
  }, []);

  return (
    <BottomContainer>
      <LoginButtonWrapper>
        <LoginButton type="kakao" onPress={onPressKakaoLogin} />
        <LoginButton type="apple" onPress={onAppleButtonPress} />

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
