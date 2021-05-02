import React, { useCallback, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styled from "@emotion/native";
import { Button } from "../../components/Button";
import { SvgXml } from "react-native-svg";
import { images } from "../../styles/images";
import { INaviProps } from "../../navigators/AuthStackNavi";
import AsyncStorage from "@react-native-community/async-storage";
import { useQuery, useMutation } from "@apollo/client";
import { GET_COACHES_QUERY, PUT_MEMBER_MUTATION } from "../../queries";
import {
  getCoaches,
  getCoaches_getCoaches,
} from "../../__generated__/getCoaches";
import { putMember, putMemberVariables } from "../../__generated__/putMember";

const { width: screenWidth, height: screenHight } = Dimensions.get("window");

interface ICoachData {
  title: string;
  subTitle: string;
  source: any;
  style: any;
}

const COACH_DATA: ICoachData[] = [
  {
    title: "나는 러닝이랑 도넛을\n사랑하는 토키야! ",
    subTitle: "나랑 같이 동네 한 바퀴 어때?",
    source: <SvgXml xml={images.coach_toki} />,
    style: {
      width: screenWidth,
      height: screenHight / 2,
    },
  },
  {
    title: "나는 산책이랑 커피를\n사랑하는 부키야! ",
    subTitle: "나랑 천천히 공원산책 해볼래?",
    source: <SvgXml xml={images.coach_buki} />,
    style: {
      width: screenWidth,
      height: screenHight / 2,
    },
  },
];

/**
 * 코치선택 설정화면
 * @param goNext
 */
const CoachContainer = ({ goNext }: INaviProps) => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);
  const { data: coachesData } = useQuery<getCoaches>(GET_COACHES_QUERY);
  const [putMember, { data: putMemberResponse }] = useMutation<
    putMember,
    putMemberVariables
  >(PUT_MEMBER_MUTATION);
  const _renderItem = useCallback(
    ({ item, index }: { item: ICoachData; index: number }) => {
      return (
        <CardView
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor:
              selectedCoachIndex === index
                ? selectedCoachIndex < 1
                  ? "#F06692"
                  : "#8AD10A"
                : "#eee",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
            }}
          >
            {item.source}
          </View>

          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 27,
              marginBottom: 4,
            }}
          >
            {item.title}
          </Text>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 20,
              marginBottom: 70,
            }}
          >
            {item.subTitle}
          </Text>
        </CardView>
      );
    },
    [selectedCoachIndex]
  );

  const onPressSelect = useCallback(() => {
    // TODO: 코치선택 데이터 저장
    console.log(selectedCoachIndex);
    if (typeof goNext === "function") goNext();
  }, [selectedCoachIndex]);

  return (
    <>
      {coachesData && Array.isArray(coachesData.getCoaches) && (
        <Container>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            style={{
              textAlign: "left",
              fontWeight: "600",
              fontSize: 24,
              lineHeight: 36,
              marginBottom: 10,
              marginLeft: 16,
            }}
          >
            {`나의 걷기를 도와줄 코치를\n선택해주세요!`}
          </Text>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              textAlign: "left",
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 24,
              marginBottom: 70,
              marginLeft: 16,
            }}
          >
            {`코치를 선택해야 서비스를 이용할 수 있어요!`}
          </Text>

          <Carousel
            data={COACH_DATA}
            renderItem={_renderItem}
            sliderHeight={screenHight}
            sliderWidth={screenWidth}
            itemWidth={290}
            activeSlideAlignment={"center"}
            inactiveSlideScale={1}
            onSnapToItem={(index) => setSelectedCoachIndex(index)}
            slideStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <BottomContainer>
            <Button
              text="다음"
              onPress={() => {
                const selectedCoach = (coachesData.getCoaches as getCoaches_getCoaches[])[
                  selectedCoachIndex
                ];
                putMember({
                  variables: { member: { coachId: selectedCoach.id } },
                })
                  .then((res) => {
                    AsyncStorage.setItem("coach", selectedCoach.name as string);
                    if (typeof goNext === "function") goNext();
                  })
                  .catch((e) => console.log("putMember Error: " + e));
              }}
              type="secondary"
            />
          </BottomContainer>
        </Container>
      )}
    </>
  );
};

export default CoachContainer;

const Container = styled.View`
  flex: 1;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.color.white};
`;

const BottomContainer = styled.View`
  margin: 35px;
  bottom: 0;
  z-index: 100;
`;

const CardView = styled.View`
  width: 264px;
  height: 360px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`;
