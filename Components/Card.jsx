import { View, Text, Image } from "react-native";
import card from "../Styles/Card-Style";

export default function Card({imagem, nome, preco}) {
  return (
  <View style={card.bg}>
    <Image style={card.image} source={{
          uri: imagem,
        }} />
    <Text style={card.nome}>{nome}</Text>
    <Text style={card.preco}>R$ {preco}</Text>
    <Text>Frete grátis</Text>
  </View>

  )
}