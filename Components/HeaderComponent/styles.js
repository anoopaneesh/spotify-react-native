import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:150,
        height:150,
    },
    title:{
        marginTop:10,
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
    subtitle:{
        marginTop:10,
        color:'grey',
        fontSize:12,
        fontWeight:'bold',
    },
    button:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:20,
        width:150,
        height:50,
        backgroundColor:'#19BA54',
        borderRadius:50,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
    }
})