import React, { useCallback, useState } from "react";
import { Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styled from "@emotion/native";
import { Button } from "../../components/Button";
import { SafeLayout } from "../../layouts/SafeLayout";
import { INaviProps } from "../../navigators/AuthStackNavi";

const { width: screenWidth, height: screenHight } = Dimensions.get("window");

const COACH_DATA = [
  require("../../assets/images/card_01.png"),
  require("../../assets/images/card_02.png"),
];

/**
 * 코치선택 설정화면
 * @param goNext
 */
const CoachContainer = ({ goNext }: INaviProps) => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);

  const _renderItem = useCallback(({ item }: { item: number }) => {
    return <Iamge source={item} />;
  }, []);

  const onPressSelect = useCallback(() => {
    // TODO: 코치선택 데이터 저장
    console.log(selectedCoachIndex);
    if (typeof goNext === "function") goNext();
  }, [selectedCoachIndex]);

  return (
    <>
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
          sliderWidth={screenWidth - 32}
          itemWidth={264 + 12}
          itemHeight={200}
          onSnapToItem={(index) => setSelectedCoachIndex(index)}
          slideStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Pagination
          dotsLength={2}
          activeDotIndex={selectedCoachIndex}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <BottomContainer>
          <Button
            text="선택하기"
            onPress={() => {
              if (typeof goNext === "function") goNext();
            }}
            type="secondary"
          />
        </BottomContainer>
      </Container>
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
  margin: 75px 37px;
  bottom: 0;
  z-index: 100;
`;

const Iamge = styled.Image``;
