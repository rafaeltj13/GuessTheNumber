import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '../utils/constants'
import HomeScreen from '../screens/home/HomeScreen';
import GameNavigator from '../screens/game/GameNavigator';

const RootStack = createStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.title,
            }}
            initialRouteName={"Home"}
            >
            <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'Guess The Number! ' }} />
            <RootStack.Screen name="Game" component={GameNavigator} />
        </RootStack.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: defaultStyles.primaryColor,
    },
    title: {
        fontWeight: 'bold',
        color: defaultStyles.secondaryColor,
        alignSelf: 'center'
    }
})

export default RootNavigator;   