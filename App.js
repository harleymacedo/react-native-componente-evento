import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App de Treinamento</Text>
      <Button 
        onPress={ () => {alert('Botão pressionado')} } 
        title="Ligar" 
      />
      <Image source={require('./assets/bola-de-futebol-64.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
