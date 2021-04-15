import React from "react";
import styled from "@emotion/native";
import { SvgXml } from "react-native-svg";
import { icons } from "../../styles/icons";
import { images } from "../../styles/images";

export const Header = () => {
  return (
    <Container>
      <Left>
        <SvgXml xml={images.logo} />
      </Left>
      <Right>
        <SvgXml xml={icons.setting} />
      </Right>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const Left = styled.View``;

const Right = styled.View``;
