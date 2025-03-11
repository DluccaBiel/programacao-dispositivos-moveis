import { View, Text } from "react-native";

function PadraoIOS() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ height: 150, backgroundColor: "gray", alignItems: "baseline" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>Meu App</Text>
      </View>
      <View style={{ height: 150, backgroundColor: "lightgray", justifyContent: "space-around", alignItems: "center" }}>
        <Text>Home</Text>
        <Text>Perfil</Text>
        <Text>Configuração</Text>
      </View>
    </View>
  );
}

export default PadraoIOS;