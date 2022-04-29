import {ScrollView, Text, View} from "react-native";
import {useSelector} from "react-redux";

function Assets() {
    const crypto = useSelector(state => state.subjects.crypto)

    return (
        <View style={style.wrapper}>
            <View style={style.header}>
                <View style={style.headerContainer}>
                    <Text style={style.headerText}>Favorite</Text>
                </View>
            </View>
            <ScrollView>
                <View style={style.card}>
                    {
                        crypto ?
                            <>
                                <View>
                                    <Text style={style.symbol}>{crypto?.symbol}</Text>
                                    <Text style={style.name}>{crypto?.name}</Text>
                                </View>
                                <View>
                                    <Text style={style.symbol}>{crypto?.type}</Text>
                                    <Text style={style.name}>{crypto?.decimals}</Text>
                                </View>
                            </>
                        : <Text>no have favorites</Text>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

export default Assets

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
        marginTop: 20
    },
    name: {
        color: '#b0bbc2'
    },
    symbol: {
        fontSize: 20
    },
}
