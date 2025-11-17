import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SobreApp() {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <Animated.View style={[styles.container, { opacity: fade }]}>

        {/* Foto e identificação */}
        <Image
          style={styles.foto}
          source={{ uri: "https://i.imgur.com/X4H4BuG.jpeg" }}
        />

        <Text style={styles.nome}>Antônio Frota</Text>
        <Text style={styles.tituloProf}>Dev Mobile • Técnico em Eletrotécnica</Text>

        {/* o separador*/}
        <View style={styles.separator} />

        {/* minha formação */}
        <View style={styles.box}>
          <View style={styles.header}>
            <Ionicons name="school-outline" size={22} color="#000" />
            <Text style={styles.sectionTitle}>Formação</Text>
          </View>

          <Text>• Técnico em Eletrotécnica - Senai</Text>
          <Text>• Sistemas de Informação - Uninassau</Text>
          <Text>• Curso Básico de Arduino</Text>
        </View>

        {/* Eminha experiencia */}
        <View style={styles.box}>
          <View style={styles.header}>
            <Ionicons name="briefcase-outline" size={22} color="#000" />
            <Text style={styles.sectionTitle}>Experiência</Text>
          </View>

          <Text>• Aprendiz - Hapvida</Text>
          <Text>• Período: 2025 - Atual</Text>
          <Text>• Funções: Auxílio técnico e suporte</Text>
        </View>

        {/* habilidades */}
        <View style={styles.box}>
          <View style={styles.header}>
            <Ionicons name="hammer-outline" size={22} color="#000" />
            <Text style={styles.sectionTitle}>Habilidades</Text>
          </View>

          <Text>• React Native</Text>
          <Text>• Mecatrônica (básico)</Text>
          <Text>• Manutenção de Eletrônicos</Text>
          <Text>• Android Studio (básico)</Text>
        </View>

        {/* meus projetos */}
        <View style={styles.box}>
          <View style={styles.header}>
            <Ionicons name="code-slash-outline" size={22} color="#000" />
            <Text style={styles.sectionTitle}>Projetos</Text>
          </View>

          <Text>• Mini PC adaptado de TV Box</Text>
          <Text>• App de auxílio técnico</Text>
          <Text>• Site portfólio em React</Text>
        </View>

        {/* Ccontatos*/}
        <View style={styles.box}>
          <View style={styles.header}>
            <Ionicons name="chatbubbles-outline" size={22} color="#000" />
            <Text style={styles.sectionTitle}>Contatos</Text>
          </View>

          <Text>Email: antoniofrota334@gmail.com</Text>
          <Text>WhatsApp: (88) 98845-6687</Text>
        </View>

        {/* Botões para deixar estilizados*/}
        <View style={styles.socialBox}>
          <Text
            style={styles.socialButton}
            onPress={() => Linking.openURL("https://github.com/AntonVsc2")}
          >
            <FontAwesome name="github" size={22} color="#fff" />   GitHub
          </Text>

          <Text
            style={[styles.socialButton, { backgroundColor: "#0A66C2" }]}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/ant%C3%B4nio-frota-de-vasconcelos-0789b9253/")
            }
          >
            <FontAwesome name="linkedin" size={22} color="#fff" />   LinkedIn
          </Text>
        </View>

      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    alignItems: "center",
    padding: 20,
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 18,
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },

  tituloProf: {
    fontSize: 15,
    color: "#555",
    marginBottom: 12,
  },

  separator: {
    width: "90%",
    height: 1.2,
    backgroundColor: "#000",
    opacity: 0.15,
    marginVertical: 18,
  },

  box: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  socialBox: {
    width: "100%",
    marginTop: 10,
    gap: 12,
  },

  socialButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    borderRadius: 14,
  },
});
