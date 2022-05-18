import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Components/Card';
import Header from './Components/Header';
import Scroller from './Components/Scroller';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Scroller />
      <Text style={styles.titulos}>👉 Popular 🛍️</Text>
      <ScrollView>
        <View style={styles.cards}>
          <Card imagem={'https://static3.tcdn.com.br/img/img_prod/329397/jogo_copos_aruba_long_drink_475ml_cinza_6_pecas_sm_aruba_11520_1_20210212143545.jpg'} nome={"jogo de copos"} preco={"80,00"}/>
          <Card imagem={'https://http2.mlstatic.com/D_NQ_NP_740343-MLB49643143785_042022-W.jpg'} nome={"jogo de facas"} preco={"30,00"}/>
          <Card imagem={'https://a-static.mlcdn.com.br/450x450/jogo-xicara-cafe-de-porcelana-borda-decorada-c-6-pecas-50ml-hr-horacilio/cardosoutilidades/681296086/bb8ac0def5d3f6834a1387618d3d6d3f.jpg'} nome={"jogo de xicara"} preco={"50,00"}/>
          <Card imagem={'https://m.media-amazon.com/images/I/61iJujNTsnL._AC_SY450_.jpg'} nome={"jogo de panelas"} preco={"250,00"}/>

        </View>
      </ScrollView>
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
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  titulos: {
    marginLeft: 5,
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
