import {View , StyleSheet, Text} from "react-native"
import { theme } from "../theme";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto"


export default function Search(){
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Search</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
   
},
    Text:{
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
 

    },
})