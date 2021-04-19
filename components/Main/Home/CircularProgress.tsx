import React, { useCallback, useState } from "react";
import styled from "@emotion/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../../styles/theme";
import { SvgXml } from "react-native-svg";
import { images } from "../../../styles/images";

interface ICircularProgressProps {
  currentStepCount: number;
  maxStepCount: number;
}

export const CircularProgress: React.VFC<ICircularProgressProps> = ({
  currentStepCount,
  maxStepCount,
}) => {
  const [activedStep, setActivedStep] = useState(false);

  const toggleActivedStep = useCallback(() => {
    setActivedStep(prev => !prev);
  }, []);

  return (
    <Contianer>
      <AnimatedCircularProgress
        size={312}
        width={10}
        tintColor={theme.toki.color.white}
        backgroundColor={theme.toki.color.gray5}
        rotation={0}
        lineCap="round"
        fill={(currentStepCount / maxStepCount) * 100}
        tintColorSecondary={theme.toki.color.main}
        duration={2000}
      >
        {() => (
          <InnerContainer>
            <>
              <Character onPress={toggleActivedStep}>
                <SvgXml xml={images.toki} />
              </Character>
              {activedStep && (
                <Step onPress={toggleActivedStep}>
                  <StepContainer>
                    <StepText>{currentStepCount}</StepText>
                    <MaxStepText>목표 {maxStepCount} 걸음</MaxStepText>
                  </StepContainer>
                </Step>
              )}
            </>
          </InnerContainer>
        )}
      </AnimatedCircularProgress>
    </Contianer>
  );
};

const Contianer = styled.View`
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.white};
`;

const Character = styled.TouchableWithoutFeedback``;

const Step = styled.TouchableWithoutFeedback``;

const StepContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.white};
  opacity: 0.8;
`;

const StepText = styled.Text`
  font-size: 54px;
  font-weight: bold;
  line-height: 66px;

  color: ${props => props.theme.color.main};

  margin-bottom: 8px;
`;

const MaxStepText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: ${props => props.theme.color.black};
`;
