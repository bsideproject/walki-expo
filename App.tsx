import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { client, isLoggedInVar } from "./common/apollo";
import { AuthStack } from "./navigators/AuthStack";
import { MainStack } from "./navigators/MainStack";
import { theme } from "./styles/theme";
import AppLoading from "expo-app-loading";

const App = () => {
  // const [loading, setLoading] = useState(true);
  // const isLoggedIn = useReactiveVar(isLoggedInVar);

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
          {true ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
