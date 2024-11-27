import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { StyleScreen } from './src/theme/StyleScreen';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operaciones, Operadores ,resultado  } = useCalculadora();

  return (
  
    <View style={StyleScreen.container}>    
   
      <Pantalla tamanio = 'grande' numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla tamanio = 'peque' numberOfLines={1} adjustsFontSizeToFit></Pantalla>
      ) : (
        <Pantalla tamanio = 'peque' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
   
      
      <StatusBar style="auto" />

    <View style={StyleScreen.fila}>
      <BotonOperacion label='C' color='avanzado' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' color='avanzado' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' color='avanzado' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' color='operacion' onPress={() =>operaciones(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='7' color='numero' onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' color='numero' onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' color='numero' onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' color='operacion' onPress={() =>operaciones(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='4' color='numero' onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' color='numero' onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' color='numero' onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' color='operacion' onPress={() =>operaciones(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='1' color='numero' onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' color='numero' onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' color='numero' onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' color='operacion' onPress={() =>operaciones(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='0' color='numero' width={180} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' color='numero' onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' color='operacion' onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
  }
});*/
