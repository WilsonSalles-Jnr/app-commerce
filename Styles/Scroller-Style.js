import { StyleSheet } from "react-native";

const scroller = StyleSheet.create({
  fundo: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
  },
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: "yellow",
  }
})

export default scroller;