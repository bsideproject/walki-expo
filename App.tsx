import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { client, isLoggedInVar } from "./common/apollo";
import { AuthNav } from "./navigators/AuthNav";
import { MainNav } from "./navigators/MainNav";
import { theme } from "./styles/theme";

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ThemeProvider theme={theme.toki}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {isLoggedIn ? <MainNav /> : <AuthNav />}
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
