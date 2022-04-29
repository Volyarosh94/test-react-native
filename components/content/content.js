import {Button, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {get} from "../../axios/axios";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {addSubject} from "../../redux/actions";

function Content({item}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()


    const addFavorites = (value) => {
        dispatch(addSubject(value))
    }

    return (
        <View style={style.content}>
            <ScrollView style={style.info}>
                {
                    item?.map(value =>
                        <TouchableOpacity
                            style={style.card}
                            onPress={()=> navigation.navigate('Detais',{
                                decimals: value.decimals,
                                symbol: value.symbol,
                                name: value.name,
                                type:value.type
                            })
                            }
                        >
                            <View>
                                <Text style={style.symbol}>{value.symbol}</Text>
                                <Text style={style.name}>{value.name}</Text>
                            </View>
                            <View>
                                <Text style={style.symbol}>{value.type}</Text>
                                <Text style={style.name}>{value.decimals}</Text>
                            </View>
                            <Button title={'add'}
                                onPress={()=>addFavorites(value)}
                            />
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </View>
    );
}

export default Content


const style = {
    content: {
        backgroundColor: '#4767c5',
        height: '100%',
        alignItems: 'center',
    },
    info: {
        width: "90%",
        height: '100%'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        marginTop:20
    },
    name: {
        color: '#b0bbc2'
    },
    symbol: {
        fontSize: 20
    },
}
