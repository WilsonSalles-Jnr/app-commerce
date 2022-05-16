import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './Components/Header';
import Scroller from './Components/Scroller';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Scroller />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#E2E2E2',
  },
});
