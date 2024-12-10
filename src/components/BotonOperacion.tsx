import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import { StyleScreen } from '../theme/StyleScreen';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
}

interface Props extends TextProps{color: 'operacion' | 'numero' | 'avanzado'}

export const BotonOperacion = ({label, width = 80, color, onPress}:Props) => {

    const accion = (() => {
        if (onPress) onPress()
        Haptics.selectionAsync();

      })
    

    return (
        <Pressable>
            <Text 
                style={[StyleScreen.boton,
                    {width},
                    color === 'operacion' ?StyleScreen.btnOperations:null, color ==='numero' ?StyleScreen.btnNumero:null, color === 'avanzado' ?StyleScreen.btnOthers:null
                ]}
                onPress={accion}>{label}</Text>
        </Pressable>
    )
};
/*
const styles = StyleSheet.create({
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'white',
        borderWidth: 2,
    }
  });*/