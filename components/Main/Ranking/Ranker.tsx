import React from "react";
import styled from "@emotion/native";
import { SvgXml } from "react-native-svg";
import { images } from "../../../styles/images";

export const Ranker = () => {
  return (
    <Container>
      <Left>
        <No>1</No>
        <Avatar
          source={{
            uri:
              "https://images.unsplash.com/photo-1585399058947-f68f9db58e5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <UserInfo>
          <Username>Letmein</Username>
          <Userstep>총 232,631 걸음</Userstep>
        </UserInfo>
      </Left>
      <Right>
        <SvgXml width={40} height={40} xml={images.charactor.toki.face.smile} />
      </Right>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const No = styled.Text`
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  color: ${props => props.theme.color.gray4};
  margin-right: 16px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

const UserInfo = styled.View``;

const Username = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const Userstep = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Right = styled.View``;
