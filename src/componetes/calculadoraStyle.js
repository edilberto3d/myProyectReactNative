// InterfazCalculadora.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import useCalculadora from './calculadora';

const InterfazCalculadora = () => {
  const {
    entradaActual,
    presionarNumero,
    presionarOperacion,
    limpiar,
    borrarUltimo,
    cambiarSigno,
  } = useCalculadora();

  return (
    <View style={styles.contenedor}>
      <View style={styles.calculadora}>
        <Text style={styles.tituloCalculadora}>CALCULADORA</Text>
        <View style={styles.contenedorResultado}>
          <Text style={styles.textoResultado}>{entradaActual || '0'}</Text>
        </View>
        <View style={styles.fila}>
          <BotonCalculadora texto="C" accion={limpiar} />
          <BotonCalculadora texto="/" accion={() => presionarOperacion('/')} />
          <BotonCalculadora texto="^" accion={() => presionarOperacion('^')} />
          <BotonCalculadora texto="CE" accion={borrarUltimo} />
        </View>
        <View style={styles.fila}>
          <BotonCalculadora texto="7" accion={() => presionarNumero('7')} />
          <BotonCalculadora texto="8" accion={() => presionarNumero('8')} />
          <BotonCalculadora texto="9" accion={() => presionarNumero('9')} />
          <BotonCalculadora texto="" accion={() => presionarOperacion('')} />
        </View>
        <View style={styles.fila}>
          <BotonCalculadora texto="4" accion={() => presionarNumero('4')} />
          <BotonCalculadora texto="5" accion={() => presionarNumero('5')} />
          <BotonCalculadora texto="6" accion={() => presionarNumero('6')} />
          <BotonCalculadora texto="-" accion={() => presionarOperacion('-')} />
        </View>
        <View style={styles.fila}>
          <BotonCalculadora texto="1" accion={() => presionarNumero('1')} />
          <BotonCalculadora texto="2" accion={() => presionarNumero('2')} />
          <BotonCalculadora texto="3" accion={() => presionarNumero('3')} />
          <BotonCalculadora texto="+" accion={() => presionarOperacion('+')} />
        </View>
        <View style={styles.fila}>
          <BotonCalculadora texto="±" accion={cambiarSigno} />
          <BotonCalculadora texto="0" accion={() => presionarNumero('0')} />
          <BotonCalculadora texto="." accion={() => presionarNumero('.')} />
          <BotonCalculadora texto="=" accion={() => presionarOperacion('=')} />
        </View>
      </View>
    </View>
  );
};

const BotonCalculadora = ({ texto, accion }) => (
  <TouchableOpacity style={styles.boton} onPress={accion}>
    <Text style={styles.textoBoton}>{texto}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#f3d0b3', 
  },
  calculadora: {
    width: '100%',
    paddingTop: 50, 
    paddingBottom: 10, 
    alignItems: 'center',
    backgroundColor: '#f3d0b3', 
  },
  tituloCalculadora: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  contenedorResultado: {
    width: '90%', 
    minHeight: 80, 
    backgroundColor: '#fae5c9', 
    justifyContent: 'center',
    alignItems: 'flex-end', 
    borderRadius: 10, 
    padding: 20,
    marginBottom: 20, 
  },
  textoResultado: {
    fontSize: 36, 
    color: '#000', 
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%', 
    maxWidth: 500, 
  },
  boton: {
    backgroundColor: '#f0be95',
    width: 80,
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
  textoBoton: {
    fontSize: 24, 
    color: '#000', 
  },
});

export default InterfazCalculadora;
