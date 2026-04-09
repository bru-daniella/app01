import { router } from "expo-router";
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Snackbar, useTheme } from "react-native-paper";

export default function Index() {
  const theme = useTheme();
  const [rodando, setRodando] = useState(false);
  const [tempo, setTempo] = useState(1500);
  const minutos = String(Math.floor(tempo / 60)).padStart(2, "0");
  const segundos = String(tempo % 60).padStart(2, "0");
  const [exibeMensagem, setExibeMensagem] = useState(false);

  useEffect(() => {
    let intervalo;

    if (rodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((valorAnterior) => valorAnterior - 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [rodando, tempo]);

  return (
    <View style={[styles.container, { background: theme.colors.background }]}>

      {/* Menu */}

      <View style={[styles.topo, { backgroundColor: theme.colors.primary }]}>
        <Pressable
          style={styles.botaoTopo}
          onPress={() => router.push("/")}>
          <Text style={styles.textoBotaoTopo}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.botaoTopo}
          onPress={() => router.push("/telaA")}>
          <Text style={styles.textoBotaoTopo}>Tela A</Text>
        </Pressable>
        <Pressable
          style={styles.botaoTopo}
          onPress={() => router.push("/telaB")}>
          <Text style={styles.textoBotaoTopo}>Tela B</Text>
        </Pressable>
      </View>

      {/* Relógio */}

      <Image style={styles.image} source={require('./relogio.png')} />

      <View style={styles.actions}>
        <Text style={styles.timer}>
          {minutos}:{segundos}
        </Text>
        <Button mode="contained"
          style={[rodando ? styles.buttonStart : styles.buttonStop,
          { backgroundColor: rodando ? "#990000" : theme.colors.secondary }]}
          lebelStyle={styles.textButton}
          onPress={() => {
            setRodando(!rodando);
            setExibeMensagem(true);
          }}>
          {rodando ? "Pausar" : "Iniciar"}
        </Button>

        <Snackbar
          visible={exibeMensagem}
          duration={1500}
          onDismiss={() => setExibeMensagem(false)}
        >
          {rodando ? "Cronômetro Iniciado" : "Cronômetro pausado"}
        </Snackbar>
      </View>

      {/* Footer */}

      <View style={styles.footer}>
        <Text style={styles.textfooter}>Curso de react</Text>
        <Text style={styles.textfooter}>2026 - Meu App</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStart: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8
  },
  buttonStop: {
    backgroundColor: "#82ff72",
    borderRadius: 32,
    padding: 8
  },
  textButton: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18
  },
  footer: {
    width: "80%"
  },
  textfooter: {
    textAlign: "center",
    color: "#98A0A8",
    fontStyle: 12.5
  }
})
