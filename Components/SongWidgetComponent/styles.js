import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#434240',
        zIndex:100,
        position:'absolute',
        bottom:48,
        right:0,
        left:0,
        width:'100%',
        height:60,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    song:{
        height:'100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection:'row'
    },
    image:{
        height:'100%',
        width:100,
    },
    title:{
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        marginRight:5,
    },
    subtitle:{
        color:'grey',
        fontWeight:'bold'
    },
    icons:{
        display:'flex',
        flexDirection:'row',
        height:'100%',
        alignItems: 'center',
        width:100,
        justifyContent: 'space-around'
    }
})