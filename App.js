import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    setExpressao(prevExpressao => prevExpressao + value);
  };

  const limpar = () => {
    setExpressao('');
    setResultado('');
  };

  const calcularResultado = () => {
    try {
      setResultado(eval(expressao).toString());
    } catch (error) {
      setResultado('Erro');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Expressão"
          value={expressao}
          onChangeText={setExpressao}
          style={styles.input}
        />
        <View style={styles.buttonRow}>
          <Button onPress={() => handlePress('7')}>7</Button>
          <Button onPress={() => handlePress('8')}>8</Button>
          <Button onPress={() => handlePress('9')}>9</Button>
          <Button onPress={() => handlePress('+')}>+</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={() => handlePress('4')}>4</Button>
          <Button onPress={() => handlePress('5')}>5</Button>
          <Button onPress={() => handlePress('6')}>6</Button>
          <Button onPress={() => handlePress('-')}>-</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={() => handlePress('1')}>1</Button>
          <Button onPress={() => handlePress('2')}>2</Button>
          <Button onPress={() => handlePress('3')}>3</Button>
          <Button onPress={() => handlePress('*')}>*</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button onPress={() => handlePress('0')}>0</Button>
          <Button onPress={() => handlePress('.')}>.</Button>
          <Button onPress={calcularResultado}>=</Button>
          <Button onPress={() => handlePress('/')}>/</Button>
          <Button onPress={limpar}>C</Button>
        </View>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  resultado: {
    fontSize: 24,
    marginTop: 10,
  },
});
