import React, { useCallback, useState } from "react";
import styled from "@emotion/native";
import { SafeLayout } from "../../layouts/SafeLayout";
import { Header } from "../../components/Main/Home/Header";
import { Info } from "../../components/Main/Home/Info";
import { CircularProgress } from "../../components/Main/Home/CircularProgress";
import { Button } from "../../components/Button";
import { RefreshControl } from "react-native";
import { Pedometer } from "expo-sensors";

const HomeScreen = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [maxStepCount, setMaxStepCount] = useState(100);
  const [isStarted, setIsStarted] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setCurrentDate(new Date());
    if (isStarted) {
      await Pedometer.getStepCountAsync(startDate, new Date()).then(
        result => {
          setCurrentStepCount(result.steps);
        },
        error => {
          console.log(error);
        }
      );
    }
    setRefreshing(false);
  }, [isStarted, startDate]);

  const onPressStart = useCallback(() => {
    if (!isStarted) {
      setIsStarted(true);
      setStartDate(new Date());
    }
  }, [isStarted]);

  return (
    <SafeLayout>
      <Header />
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Info currentDate={currentDate} />
        <CircularProgress
          currentStepCount={currentStepCount}
          maxStepCount={maxStepCount}
        />
        <TextContainer>
          <Text>조금만 더 힘내시면 목표에 도달할 수 있어요!</Text>
        </TextContainer>
        <ButtonContainer>
          <Button
            onPress={onPressStart}
            text={isStarted ? "오늘은 그만할래요" : "오늘의 목표를 세워보세요!"}
            type={isStarted ? "secondary" : "primary"}
          />
        </ButtonContainer>
      </Container>
    </SafeLayout>
  );
};

export default HomeScreen;

const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 16px;
`;

const TextContainer = styled.View`
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Text = styled.Text`
  font-size: 16px;

  color: ${props => props.theme.color.gray2};
`;

const ButtonContainer = styled.View`
  padding: 0px 36px;
`;
