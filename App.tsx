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
      <BotonOperacion label='C' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' onPress={() =>operaciones(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='7' onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' onPress={() =>operaciones(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='4' onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' onPress={() =>operaciones(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='1' onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' onPress={() =>operaciones(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={StyleScreen.fila}>
      <BotonOperacion label='0' width={180} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' onPress={resultado}></BotonOperacion>
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
