import {StyleSheet,Platform,StatusBar} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: "#1C1C1C", 
        flex: 1
    }
})