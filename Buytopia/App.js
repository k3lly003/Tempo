import { StatusBar } from "expo-status-bar";
import Welcome from "./Wellcome";
import { StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
});
