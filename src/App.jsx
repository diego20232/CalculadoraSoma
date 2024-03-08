import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ValorUm from "./components/ValorUm";

export default () =>{
    return (
        <View style={soma.fundo}>
            <Text style={soma.fonte}>Soma</Text>
            
            <ValorUm/>
        </View>
    )
}

const soma = StyleSheet.create(
    {
        fonte: {
            textAlign: 'center',
            fontSize: 50,
            color: '#0000FF'
        },
        fundo: {
            flex: 1,
            backgroundColor: '#ADD8E6',
        },
    }
)