import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './Components/Header';
import Scroller from './Components/Scroller';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView> */}
      <Header />
      <Scroller />
      <Text>Wilson</Text>
      <StatusBar style="auto" />

      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
