import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { client, isLoggedInVar } from "./common/apollo";
import { Platform, StatusBar } from "react-native";
import { MainStackNav } from "./navigators/MainStackNav";
import { AuthStackNavi } from "./navigators/AuthStackNavi";
import AsyncStorage from "@react-native-community/async-storage";
import { ThemeLayout } from "./layouts/ThemeLayout";

const App = () => {
  const [isMember, setMemberCheck] = useState(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => setMemberCheck(true));
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeLayout>
        <NavigationContainer>
          <StatusBar hidden={Platform.OS === "android"} />
          {isLoggedIn ? <MainStackNav /> : <AuthStackNavi />}
        </NavigationContainer>
      </ThemeLayout>
    </ApolloProvider>
  );
};

export default App;
