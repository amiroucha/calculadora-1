import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const StyleScreen =  StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: Colors.black,
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
},
pantallaPrincipal: {
    fontSize: 70,
    textAlign: 'right',
    fontWeight:400,
    width: '90%',
    
},
pantallaSecundaria: {
    fontSize: 40,
    textAlign: 'right',
    width: '90%',
},

})
