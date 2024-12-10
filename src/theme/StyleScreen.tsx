import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const StyleScreen =  StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: Colors.backColor,
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
    color: Colors.white,
},
fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
},
pantallaPrincipal: {
    fontSize: 80,
    textAlign: 'right',
    fontWeight:400,
    width: '90%',
    color: Colors.white,
    
},
pantallaSecundaria: {
    fontSize: 55,
    textAlign: 'right',
    width: '90%',
    color: Colors.white,
},
boton: {
    width:80,
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 300,
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.white,
    borderRadius: 6
},
btnNumero:{
    backgroundColor: Colors.blue
},
btnOperations:{
    backgroundColor: Colors.grayLight,
},
btnOthers:{
    backgroundColor: Colors.violet,
}

})
