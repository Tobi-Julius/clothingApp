import { useCallback, useEffect, useState } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export const useFonts = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const subscribe = async () => {
    try {
      //   displaying SplashScreen while fonts are fetched
      await SplashScreen.preventAutoHideAsync();
      //   awaiting fonts to be fetched

      await Font.loadAsync({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    } catch (error) {
      console.warn(error);
    } finally {
      //   font fetched successfully?
      Font.isLoaded ? setIsAppReady(true) : setIsAppReady(false);
    }
  };

  useEffect(() => {
    subscribe();
  }, []);

  const unSubscribe = async () => {
    //   removing the SplashScreen when the fonts are succefully loaded
    isAppReady ? await SplashScreen.hideAsync() : null;
  };

  useEffect(() => {
    unSubscribe();
  }, [isAppReady]);

  // returning the isAppReady state

  return { isAppReady };
  
};
