import {Image, ScrollView, Text, View} from "react-native";
import {get} from "../../axios/axios";
import {useEffect, useState} from "react";
import {useRoute} from '@react-navigation/native';

function Card({}) {
    const route = useRoute();
    const params = route.params;
    return (
        <View style={style.content}>
            {
                params ?
                    <>
                        <View style={style.header}>
                            <View style={style.headerContainer}>
                                <Text style={style.headerText}>{params.name}</Text>
                            </View>
                        </View>
                        <View style={style.bodyForDetails}>
                            <Text style={style.symbol}>
                                crypto symbol : {params.symbol}
                            </Text>
                            <Text style={style.type}>
                                crypto type : {params.type}
                            </Text>
                            <Text style={style.decimals}>
                                crypto decimals : {params.decimals}
                            </Text>
                        </View>
                    </>
                    :<>
                        <View style={style.headerContainer}>
                            <Text style={style.headerText}>no have name</Text>
                        </View>
                        <View style={style.bodyForDetails}>
                            <Text style={style.symbol}>
                                crypto symbol : no have details
                            </Text>
                            <Text style={style.type}>
                                crypto type : no have details
                            </Text>
                            <Text style={style.decimals}>
                                crypto decimals : no have details
                            </Text>
                        </View>
                    </>
            }
        </View>
    );
}

export default Card


const style = {
    wrapper: {
        flex: 1
    },
    header: {
        height: 150,
        backgroundColor: '#4767c5',
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase'
    },
    headerHaveCosts: {
        marginTop: 50,
        fontSize: 50,
        color: '#fff'
    },
    bodyForDetails: {
        height: '50%',
        alignItems: 'center',
        backgroundColor: '#4767c5',
        margin: 30,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 20
    },
    symbol: {
        fontSize: 30,
        color: '#fff'
    },
    type: {
        fontSize: 30,
        color: '#fff'
    },
    decimals: {
        fontSize: 20,
        color: '#fff'
    }
}
