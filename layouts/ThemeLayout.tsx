import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { useMe } from "../hooks/useMe";

export const ThemeLayout: React.FC = ({ children }) => {
  const { data: me } = useMe();

  return (
    <ThemeProvider
      theme={me?.getMember?.coach?.name === "토키" ? theme.toki : theme.booki}
    >
      {children}
    </ThemeProvider>
  );
};
