import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";


interface ButtonProps{
    title:String;
    OnPress:() => void
}
export default function Button(){
    return (
        
        <View>       
         <TouchableOpacity style= {style.container}>
            <Text style={style.title}>Quero adotar</Text>
        </TouchableOpacity>

        <View style={{paddingTop:40}}>  
        <TouchableOpacity style= {{
            borderWidth:2,
            backgroundColor:"transparent",
            borderColor:"#01377D",  borderRadius:20,
            padding:16,
            alignContent:"center",
           }}>
            <Text style={{textAlign:"center",color:"#4F4747", fontSize:24}}>Quero divulgar um animal</Text>
        </TouchableOpacity>
        </View>
        
        </View>
    );
}
const style = StyleSheet.create({
    container:{
    padding:16,
    backgroundColor:"#01377D",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:20,
    },
    title:{
    color:"#FFFFFF",
    fontSize:24,
    textAlign:"center"
    


    }
});