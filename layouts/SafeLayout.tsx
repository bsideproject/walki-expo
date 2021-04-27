import React from "react";
import styled from "@emotion/native";

interface SafeLayoutProps {
  backgroundColor?: string;
}

export const SafeLayout: React.FC<SafeLayoutProps> = ({
  children,
  backgroundColor = "#f3f3f3",
}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

const Container = styled.SafeAreaView<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;
