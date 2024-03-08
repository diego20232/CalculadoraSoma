import React, {useState} from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default () =>{
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');

    function somar(){ 
        const v1= parseInt(n1);
        const v2= parseInt(n2);
        const total= v1+v2;
        
        alert('O total é: ' +total);
    }

    

    
    
    
    
    
    
    
return (
        <View style={numero.numero}>
          <TextInput style={numero.campo} keyboardType='numeric' placeholder="Digite um valor" value={n1} onChangeText={(n1)=> setN1(n1)}/>

          <TextInput style={numero.campo} keyboardType='numeric' placeholder="Digite um valor" value={n2} onChangeText={(n2)=> setN2(n2)}/>


          <TouchableOpacity style={numero.botao} onPress={somar}>
            <Text style={numero.textoBotao}>Calcular</Text>
          </TouchableOpacity>
        </View>
    )
}

const numero = StyleSheet.create(
    {
        numero: {
            padding: 20,
            textAlign: 'center',
            fontSize: 25,
            color: '#4682B4',
        },
        campo: {
            backgroundColor: '#121212',
            borderRadius: 10,
            margin: 15,
            padding: 10,
            color: '#FFF',
            fontSize: 23,
        },
        botao: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 15,
            backgroundColor: '#41AEF4',
            padding: 10,
        },
        textoBotao: {
            color: '#FFF',
            fontSize: 25,
        },
    }
)