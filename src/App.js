import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { useFonts } from "./Hooks/useFonts";
import NavigationContainer from "./Navigation/NavigationContainer";

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
