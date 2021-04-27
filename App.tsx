import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { client, isLoggedInVar } from "./common/apollo";
import { theme } from "./styles/theme";
import { Platform, StatusBar } from "react-native";
import { MainStackNav } from "./navigators/MainStackNav";
import { AuthStackNavi } from "./navigators/AuthStackNavi";
import AsyncStorage from "@react-native-community/async-storage";

const App = () => {
  const [isMember, setMemberCheck] = useState(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    AsyncStorage.getItem("token").then(value => setMemberCheck(true));
  }, []);

  return (
    <ThemeProvider theme={theme.toki}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar hidden={Platform.OS === "android"} />
          {isLoggedIn ? <MainStackNav /> : <AuthStackNavi />}
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
