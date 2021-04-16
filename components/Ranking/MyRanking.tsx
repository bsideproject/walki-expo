import React from "react";
import styled from "@emotion/native";
import { RankBox } from "./RankBox";
import { SvgXml } from "react-native-svg";
import { images } from "../../styles/images";

export const MyRanking = () => {
  return (
    <Container>
      <Info>
        <Title>지난 랭킹보다 32위 상승했어요!</Title>
        <RankBoxs>
          <RankBox />
          <RankBox prevDay />
        </RankBoxs>
      </Info>
      <Face>
        <SvgXml xml={images.charactor.toki.face.smile} />
      </Face>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 24px 12px;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const RankBoxs = styled.View`
  flex-direction: row;
`;

const Info = styled.View``;

const Face = styled.View``;
