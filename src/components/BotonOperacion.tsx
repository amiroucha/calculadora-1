import { Pressable, Text, StyleSheet } from "react-native";
import { StyleScreen } from '../theme/StyleScreen';

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width = 80, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[StyleScreen.boton, {width}]}
                onPress={onPress}>{label}</Text>
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