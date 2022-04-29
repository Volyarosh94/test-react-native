import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home/Home";
import Assets from "./screens/Assets/Assets";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import subjectsReducer from '././redux/reducer';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Card from "./screens/CardCrypto/Card";

const Tab = createBottomTabNavigator();
const store = createStore(subjectsReducer);
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown: false}} >
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Favorites" component={Assets}/>
                    <Tab.Screen name="Detais" component={Card}  tabBarStyle={{display: 'none'}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
