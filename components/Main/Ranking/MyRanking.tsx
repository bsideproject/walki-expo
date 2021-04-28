import React from "react";
import styled from "@emotion/native";
import { RankBox } from "./RankBox";

import TokiFaceGood from "../../../assets/images/toki/face/good.svg";
import BookiFaceGood from "../../../assets/images/booki/face/good.svg";
import { useMe } from "../../../hooks/useMe";
import { useQuery } from "@apollo/client";
import {
  getMyRankings,
  getMyRankingsVariables,
} from "../../../__generated__/getMyRankings";
import { GET_MY_RANKINGS_QUERY } from "../../../queries";
import dayjs from "dayjs";

export const MyRanking = () => {
  const { data: me } = useMe();
  const { data: myRankings } = useQuery<getMyRankings, getMyRankingsVariables>(
    GET_MY_RANKINGS_QUERY,
    {
      variables: {
        start: dayjs(new Date()).add(-1, "day").format("YYYY-MM-DD"),
        end: dayjs(new Date()).add(-2, "day").format("YYYY-MM-DD"),
      },
    }
  );

  console.log(myRankings);

  return (
    <Container>
      <Info>
        {/* <Title>지난 랭킹보다 32위 상승했어요!</Title> */}
        <RankBoxs>
          <RankBox />
          <RankBox prevDay />
        </RankBoxs>
      </Info>
      <Face>
        {me?.getMember?.coach?.name === "토키" ? (
          <TokiFaceGood />
        ) : (
          <BookiFaceGood />
        )}
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
