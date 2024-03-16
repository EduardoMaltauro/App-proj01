import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const estilo = StyleSheet.create({
  tela: {
    backgroundColor: "#19282F"
  },

  titulo: {
    color: "#FF6464",
    fontSize: 48,
    marginVertical: 32,
    textAlign: "center"
  },

  texto: {
    color: "#aaa",
    fontSize: 20,
    margin: 32
  },

  imagem: {
    height: 200,
    width: "100%" 
  }
})

export default function App() {
  return <ScrollView style={estilo.tela}>
    <StatusBar barStyle="light-content" backgroundColor="#19282F" />
    <View>
      <Text style={estilo.titulo}> Aplicativo TOP </Text>
      <Text style={estilo.texto}>Meu primeiro APP com React Native</Text>
      <Image style={estilo.imagem} source={{ uri: "https://picsum.photos/200/200" }}/>
    </View>
  </ScrollView>
}
