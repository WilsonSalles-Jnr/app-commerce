import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import header from "../Styles/Header-Style";


export default function Header() {
  return (
    // <SafeAreaView>
    <LinearGradient colors={["#C9D6FF", "#E2E2E2"]}>
      <Text style={header.title}>App-Commerce</Text>

    </LinearGradient>

    // </SafeAreaView>
  )
}