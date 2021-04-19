import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { client, isLoggedInVar } from "./common/apollo";
import { AuthStack } from "./navigators/AuthStack";
import { MainStack } from "./navigators/MainStack";
import { theme } from "./styles/theme";
import AppLoading from "expo-app-loading";
import { Platform, StatusBar } from "react-native";
import { MainTabNavi } from "./navigators/MainTabNavi";
import { AuthStackNavi } from "./navigators/AuthStackNavi";

const App = () => {
  // const [loading, setLoading] = useState(true);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  // const preload = async () => {};
  // const onFinish = () => setLoading(false);

  // if (loading) {
  //   return (
  //     <AppLoading
  //       startAsync={preload}
  //       onError={console.warn}
  //       onFinish={onFinish}
  //     />
  //   );
  // }

  return (
    <ThemeProvider theme={theme.toki}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar hidden={Platform.OS === "android"} />
          {isLoggedIn ? <MainTabNavi /> : <AuthStackNavi />}
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
