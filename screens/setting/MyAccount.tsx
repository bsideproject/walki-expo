import React, { useCallback, useState } from "react";
import { Header } from "../../components/Setting/Header";
import styled from "@emotion/native";
import { SafeLayout } from "../../layouts/SafeLayout";
import { useMutation, useQuery } from "@apollo/client";
import { getMember } from "../../__generated__/getMember";
import { GET_MEMBER_QUERY, PUT_MEMBER_MUTATION } from "../../queries";
import { Button } from "../../components/Button";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { putMember, putMemberVariables } from "../../__generated__/putMember";
import TextButton from "../../components/TextButton";
import { isLoggedInVar } from "../../common/apollo";

const MyAccountScreen = () => {
  const { data } = useQuery<getMember>(GET_MEMBER_QUERY);
  const [name, setName] = useState(data?.getMember?.name || "");
  const onChangeTextName = useCallback((text: string) => {
    setName(text);
  }, []);

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, [Keyboard]);

  const [putMember, { loading: putMemberLoading }] = useMutation<
    putMember,
    putMemberVariables
  >(PUT_MEMBER_MUTATION);

  const onSubmit = useCallback(() => {
    if (name.trim() === "") {
      return;
    }
    putMember({ variables: { member: { name } } });
  }, [name]);

  const onPressLogout = useCallback(() => {
    isLoggedInVar(false);
  }, []);

  return (
    <SafeLayout backgroundColor="white">
      <Header hasBack />
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
        <Body>
          <Title>내 계정</Title>
          <Avatar source={require("../../assets/images/avatar.png")} />
          <Name value={name} onChangeText={onChangeTextName} />
          <SaveButton>
            <Button
              text="완료"
              type="secondary"
              disabled={name === data?.getMember?.name || name.trim() === ""}
              onPress={onSubmit}
              loading={putMemberLoading}
            />
          </SaveButton>
          <LogoutButton>
            <TextButton onPress={onPressLogout}>로그아웃</TextButton>
          </LogoutButton>
        </Body>
      </TouchableWithoutFeedback>
    </SafeLayout>
  );
};

export default MyAccountScreen;

const Body = styled.View`
  padding: 0px 16px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin: 16px 0px;

  color: ${props => props.theme.color.gray1};
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;

  align-self: center;

  margin-bottom: 24px;
`;

const Name = styled.TextInput`
  color: ${props => props.theme.color.gray2};

  font-size: 16px;
  line-height: 19px;

  border-width: 1px;
  border-radius: 8px;

  margin: 0px 22px;
  margin-bottom: 22px;
  padding: 14px 15px;
`;

const SaveButton = styled.View`
  padding: 0px 22px;
  margin-bottom: 22px;
`;

const LogoutButton = styled.View`
  align-self: center;
`;
