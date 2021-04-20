import React, { useCallback, useState } from "react";
import styled from "@emotion/native";
import { HEIGHT, WIDTH } from "../../../styles/theme";
import { SvgXml } from "react-native-svg";
import { images } from "../../../styles/images";

interface IReportCardProps {
  success: boolean;
  index: number;
  step: number;
  stepGoal: number;
}

export const ReportCard: React.VFC<IReportCardProps> = ({
  success,
  index,
  step,
  stepGoal,
}) => {
  const [actived, setActived] = useState(success);
  const toggleActived = useCallback(() => {
    setActived(prev => !prev);
  }, []);

  return (
    <Container success={success} onPress={toggleActived}>
      {actived ? (
        <SvgXml width={60} height={60} xml={images.charactor.toki.face.smile} />
      ) : (
        <>
          <Title success={success}>Day {index}</Title>
          <StepContainer>
            <StepNumber success={success}>{step}</StepNumber>
            <StepString success={success}>걸음</StepString>
          </StepContainer>
          <MaxStep success={success}>/ {stepGoal}</MaxStep>
        </>
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ success: boolean }>`
  width: ${`${110 * WIDTH}px`};
  height: ${`${116 * HEIGHT}px`};
  justify-content: center;
  align-items: center;
  margin: 2px;

  border-radius: 16px;

  background-color: ${props =>
    props.success ? props.theme.color.main : props.theme.color.gray6};
`;

const Title = styled.Text<{ success: boolean }>`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 16px;
  font-style: italic;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${props =>
    props.success ? props.theme.color.white : props.theme.color.gray4}; ;
`;

const StepContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 4px;
`;

const StepNumber = styled.Text<{ success: boolean }>`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${props =>
    props.success ? props.theme.color.white : props.theme.color.gray3}; ;
`;

const StepString = styled.Text<{ success: boolean }>`
  font-weight: 600;
  font-size: 12px;
  font-style: italic;
  line-height: 14px;
  text-align: center;

  color: ${props =>
    props.success ? props.theme.color.white : props.theme.color.gray3};

  margin-left: 4px;
`;

const MaxStep = styled.Text<{ success: boolean }>`
  font-weight: 500;
  font-size: 12px;
  font-style: italic;
  line-height: 12px;

  text-align: center;
  letter-spacing: 0.16px;

  color: ${props =>
    props.success ? props.theme.color.gray5 : props.theme.color.gray4};
`;
