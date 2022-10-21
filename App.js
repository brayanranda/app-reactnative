import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Alert.alert("Soy una alerta")}>
        <Text>Hola mundo!</Text>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
