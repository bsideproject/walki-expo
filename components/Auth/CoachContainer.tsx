import React, { useCallback, useState } from "react";
import { Dimensions, StyleProp, ViewStyle } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import styled from "@emotion/native";
import { Button } from "../../components/Button";
import { SafeLayout } from "../../layouts/SafeLayout";
import { INaviProps } from "../../navigators/AuthStackNavi";

const { width: screenWidth } = Dimensions.get("window");

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

  const slideStyle: StyleProp<ViewStyle> = {
    justifyContent: "center",
    alignItems: "center",
  };

  const onPressSelect = useCallback(() => {
    // TODO: 코치선택 데이터 저장
    console.log(selectedCoachIndex);
    if (typeof goNext === "function") goNext();
  }, [selectedCoachIndex]);

  return (
    <SafeLayout>
      <Container>
        <Content>
          <Title>나의 걷기를 도와줄 코치를 선택해주세요!</Title>
          <Subtitle>코치를 선택해야 서비스를 이용할 수 있어요!</Subtitle>
        </Content>
        <Carousel
          data={COACH_DATA}
          renderItem={_renderItem}
          sliderWidth={screenWidth - 32}
          itemWidth={264 + 12}
          onSnapToItem={(index) => setSelectedCoachIndex(index)}
          slideStyle={slideStyle}
        />
        <Pagination
          dotsLength={2}
          activeDotIndex={selectedCoachIndex}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <SelectButton>
          <Button text="선택하기" onPress={onPressSelect} type="secondary" />
        </SelectButton>
      </Container>
    </SafeLayout>
  );
};

export default CoachContainer;

const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Content = styled.View`
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 254px;

  margin-bottom: 16px;
`;

const Subtitle = styled.Text``;

const Iamge = styled.Image``;

const SelectButton = styled.View`
  margin-bottom: 24px;
`;
