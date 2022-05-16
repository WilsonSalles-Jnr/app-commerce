import { StyleSheet } from "react-native";

const scroller = StyleSheet.create({
  fundo: {
    backgroundColor: "#E2E2E2",
    borderTopWidth: 1,
    borderColor: 'white',
    borderStyle: "dashed",
    paddingVertical: 10,
  },
  gradient: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 50,
    height: 50,
    fontSize: 24,
  }
})

export default scroller;