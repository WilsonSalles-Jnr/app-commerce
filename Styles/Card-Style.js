import { StyleSheet } from "react-native";

const card = StyleSheet.create({
  bg: {
    alignItems: 'center',
    backgroundColor: '#fff2f2',
    margin: 5,
    padding: 5,
    borderRadius: 15,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  preco: {
    fontSize: 16,
  }
});

export default card;