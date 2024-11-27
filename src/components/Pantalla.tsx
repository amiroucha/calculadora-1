import { Text, type TextProps, StyleSheet } from 'react-native';
import { StyleScreen } from '../theme/StyleScreen';

interface Props extends TextProps {
  tamanio: 'grande' | 'peque';
};

export const Pantalla = ({children,tamanio, ...rest}:Props) => {
  return (
    <Text style={tamanio === 'grande' ? StyleScreen.pantallaPrincipal : StyleScreen.pantallaSecundaria} 
        {...rest}>
      {children}
    </Text>
  )
}  