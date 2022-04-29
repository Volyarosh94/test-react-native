import {Image, Text, TouchableOpacity, View} from "react-native";
import axios, {get} from "../../axios/axios";
import {useEffect, useState} from "react";
import Content from "../../components/content/content";

function Home() {
    const [item,setItem] = useState([])

    useEffect(()=>{
      setItem(get._W?.data?.data.items)
    },[setItem])

    const addItem = () => {
      setItem(get._W?.data?.data.items)
    }
    return (
        <View style={style.wrapper}>
            <View style={style.header}>
                <View style={style.headerContainer}>
                    <Text style={style.headerText}>Your total balance</Text>
                    <Text style={style.headerHaveCosts}>345,923 $</Text>
                </View>
            </View>
            {
                item ?
                <Content item={item}/>
                    : <TouchableOpacity style={style.buttonContainer} onPress={()=> addItem()}>
                    <Text style={style.clickButton}>
                        no have data please click to update
                    </Text>
                    </TouchableOpacity>
            }
        </View>
    );
}

export default Home

const style = {
    wrapper:{
        flex: 1,
    },
    header:{
        height:250,
        backgroundColor:'#4767c5',
    },
    headerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:18,
        color:'#fff',
        textTransform:'uppercase'
    },
    headerHaveCosts:{
        marginTop:50,
        fontSize: 50,
        color: '#fff'
    },
    clickButton:{
        fontSize:20
    },
    buttonContainer:{
        alignItems: 'center',
        backgroundColor: 'red',
        height: '20%',
        justifyContent: 'center'
    }
}
