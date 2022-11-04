import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // utiliza do mecanismo de variaveis estaticas (static)
  const [text, setText] = useState('Texto inicial'); // retorna um vetor contendo:
  /**
   * v[0] -> variavel estatica (readonly) conteudo o valor da variavel de estado
   * v[1] -> funcao a qual permite atualizar a variavel de estado do variavel estatica
   * [var, setVar] -> destruturizacao do vetor
   */

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title='Alterar texto'
        color={'#f101aa'}
        onPress={() => setText('Texto alterado!')}></Button>
      <StatusBar style='auto' />
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
