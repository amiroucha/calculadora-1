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



/*import { Text, type TextProps, StyleSheet } from 'react-native';

interface Props extends TextProps {};

export const Pantalla2 = ({children, ...rest}:Props) => {
  return (
    <Text style={styles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  ) 
}

const styles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 40,
        textAlign: 'right',
        width: '90%',
    },
  });*/
