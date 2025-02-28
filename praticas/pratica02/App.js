import React from 'react';
import { View } from 'react-native';

// Componente AppBar
function AppBar(props) {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{props.titulo}</Text>
    </View>
  );
}

// Componente principal App
function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar titulo="Minha Aplicação React Native" />
      <View style={styles.container}>
        <Text>Olá, Mundo!</Text>
      </View>
    </View>
  );
}

export default App;