import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { client, isLoggedInVar } from "./common/apollo";
import { MainStackNav } from "./navigators/MainStackNav";
import { AuthStackNavi } from "./navigators/AuthStackNavi";
import AsyncStorage from "@react-native-community/async-storage";
import { ThemeLayout } from "./layouts/ThemeLayout";

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    // TODO: 토큰 만료된 케이스 ?
    AsyncStorage.getItem("token").then((value) => {
      // isLoggedInVar(true);
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeLayout>
        <NavigationContainer>
          <StatusBar style="dark" />
          {isLoggedIn ? <MainStackNav /> : <AuthStackNavi />}
        </NavigationContainer>
      </ThemeLayout>
    </ApolloProvider>
  );
};

export default App;
