import React, { useState } from 'react'
import { View,Text,SafeAreaView,StyleSheet,useColorScheme, Button } from 'react-native'
export default function AppPro(): JSX.Element {
    const [theme,setTheme] = useState("light")
    const isDarkMode = useColorScheme() === theme;

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText }>
                Hello World!
            </Text>
            <Button title='toggle theme' onPress={()=>setTheme(theme==="light"?"dark":"light")}/>
        </View>     
    )
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems:"center",
        justifyContent:"center"
    },
    whiteText:{
        color: "white"
    },
    darkText:{
        color:"black"
    }
})