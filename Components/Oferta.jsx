import { Text, Image, ScrollView } from "react-native";
import oferta from "../Styles/oferta";

export default function Oferta() {
  return (
    <ScrollView horizontal style={oferta.bg}>
        <Image style={oferta.card} source={{uri: "https://www-cms.pipedriveassets.com/blog-assets/sales-promotion.png"}} />
        <Image style={oferta.card} source={{uri: "https://doity.com.br/blog/wp-content/uploads/2019/11/Promo%C3%A7%C3%A3o-de-eventos.png"}} />
    </ScrollView>
  )
}