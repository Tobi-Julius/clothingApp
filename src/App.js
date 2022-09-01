import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { useFonts } from "./hooks/useFonts";
import NavigationContainer from "./navigation/NavigationContainer";

function App() {
  const { isAppReady } = useFonts();

  return !isAppReady ? null : (
    <>
      <StatusBar style="auto" />
      <NavigationContainer />
    </>
  );
}

registerRootComponent(App);
