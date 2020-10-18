import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../utils/constants'
import ClueScreen from './clue/ClueScreen';
import ResumeScreen from './resume/ResumeScreen';

const GameStack = createStackNavigator();

const GameNavigator = () => {
    return (
        <GameStack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.title,
                headerLeft: null,
            }}>
            <GameStack.Screen
                name="Clue"
                component={ClueScreen}
                options={{
                    headerLeft: null,
                    title: 'Pistas'
                }} />
            <GameStack.Screen
                name="Resume"
                component={ResumeScreen}
                options={{
                    headerLeft: null,
                    title: 'Resumo'
                }} />
        </GameStack.Navigator>
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

export default GameNavigator;   