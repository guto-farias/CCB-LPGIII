import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { Link } from 'expo-router';
import { useRouter } from 'expo-router';


export default function Index() {
    const router = useRouter();

    const handleCalendarPress = () => {
      const dayOfWeek = new Date().getDay();
      let route = "/";
  
      switch(dayOfWeek) {
        case 1:
          route = "/monday";
          break;
        case 2:
          route = "/tuesday";
          break;
        case 3:
          route = "/";
          break;
        case 4:
          route = "/thursday";
          break;
        case 5:
          route = "/friday";
          break;
        default:
          route = "/";
      }
  
      router.push(route);
    };
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
          <TouchableOpacity><Image style={styles.backImg} source={require("../assets/images/back.png")} /></TouchableOpacity>
          <Image style={styles.logoImg} source={require("../assets/images/logo.png")} />
          <TouchableOpacity><Image style={styles.menuImg} source={require("../assets/images/menu.png")} /></TouchableOpacity>
      </View>

      <View style={styles.category}>
          <TouchableOpacity><Text style={styles.categoryText}><Link href="/monday">Segunda Feira</Link></Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.categoryText}><Link href="/tuesday">Terça Feira</Link></Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.categoryText}><Link href="/">Quarta Feira</Link></Text></TouchableOpacity>
          <TouchableOpacity><Text style={[styles.categoryText, { fontWeight: "700" }]}><Link href="/thursday">Quinta Feira</Link></Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.categoryText}><Link href="/friday">Sexta Feira</Link></Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.menuContent} showsVerticalScrollIndicator={false}>
        <View style={styles.menuItem}>
          <View style={styles.groupTitle}>
              <Image style={styles.arrowImg} source={require("../assets/images/arrow.png")}></Image>
              <Text style={styles.menuTitle}>Saladas</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Chicória com tomate</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Repolho cozido & Fruta</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.groupTitle}>
              <Image style={styles.arrowImg} source={require("../assets/images/arrow.png")}></Image>
              <Text style={styles.menuTitle}>Acompanhamento</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Arroz branco</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Feijão preto</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.groupTitle}>
              <Image style={styles.arrowImg} source={require("../assets/images/arrow.png")}></Image>
              <Text style={styles.menuTitle}>Guarnição</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Macarrão com ervas finas</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.groupTitle}>
              <Image style={styles.arrowImg} source={require("../assets/images/arrow.png")}></Image>
              <Text style={styles.menuTitle}>Vegeteriano</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Ovo ao molho</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.groupTitle}>
              <Image style={styles.arrowImg} source={require("../assets/images/arrow.png")}></Image>
              <Text style={styles.menuTitle}>Prato principal</Text>
          </View>

          <View style={styles.groupDescription}>
              <Image style={styles.triangleImg} source={require("../assets/images/triangle.png")}></Image>
              <Text style={styles.menuDescription}>Frango xadrez</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity><Image style={styles.icon} source={require("../assets/images/home.png")} /></TouchableOpacity>
        <TouchableOpacity onPress={handleCalendarPress}><Image style={styles.icon} source={require("../assets/images/calendar.png")} /></TouchableOpacity>
        <TouchableOpacity><Image style={styles.icon} source={require("../assets/images/help.png")} /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    conteiner: {
      backgroundColor: "#FFF5E1",
      flex: 1,
      alignItems: "center",
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },

    backImg: {
      width: 40,
      height: 40,
      marginTop: 30,
      right: 90,
    },

    logoImg: {
      width: 80,
      height: 80,
      marginTop: 15,
    },

    menuImg: {
      width: 40,
      height: 40,
      marginTop: 29,
      left: 92,
    },

    category: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      paddingLeft: 30,
      paddingVertical: 10,
      paddingTop: 30,
      alignItems: "center",
    },

    categoryText: {
      fontSize: 15,
      color: "#333",
      maxWidth:"70%",
      textAlign: "center",
    },

    menuContent: {
      width: "90%",
      marginTop: 10,
      marginBottom: 50,
    },

    menuItem: {
      marginBottom: 20,
    },

    menuTitle: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#666",
      marginTop: 25,
      marginLeft: 8,
    },

    menuDescription: {
      fontSize: 15,
      color: "#666",
      marginTop: 14,
    },

    arrowImg: {
      width: 38,
      height: 38,
      marginHorizontal: 10,
      marginTop: 19,
    },

    triangleImg: {
      width: 22,
      height: 30,
      marginTop: 10,
      marginHorizontal: 32,
      marginLeft: 62,
    },

    groupTitle: {
      flexDirection: 'row',
    },

    groupDescription: {
      flexDirection: 'row',
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      backgroundColor: "#FFF5E1",
      paddingVertical: 8,
      position: "absolute",
      bottom: 0,
    },

    icon: {
      width: 30,
      height: 30,
    },

})

