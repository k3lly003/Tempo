import { StatusBar } from "expo-status-bar";
import Welcome from "./Welcome";
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
