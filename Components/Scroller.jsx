import { LinearGradient } from "expo-linear-gradient";
import { Text, ScrollView, View } from "react-native";
import scroller from "../Styles/Scroller-Style";

const gradient = ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"]

export default function Scroller() {
  return(
    <LinearGradient colors={["#E0EAFC", "#CFDEF3"]}>

    <ScrollView style={scroller.fundo} horizontal={true} bounces={true}>
      <LinearGradient colors={gradient} style={scroller.gradient}>
        <Text style={scroller.item}>✈️</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>👟</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>👗</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>🏠</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>💻</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>📱</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>📚</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>🧸</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>🍔</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>🎧</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>💍</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>💊</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>🚗</Text>
      </LinearGradient>
      <LinearGradient colors={gradient} style={scroller.gradient}>
      <Text style={scroller.item}>📷</Text>
      </LinearGradient>
    </ScrollView>
    </LinearGradient>


  )
}