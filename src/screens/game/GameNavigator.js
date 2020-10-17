import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../utils/constants'
import ClueScreen from './clue/ClueScreen';
import ResumeScreen from './resume/ResumeScreen';
import BackButton from '../../components/backButton/BackButton';

const GameStack = createStackNavigator();

const GameNavigator = () => {
    return (
        <GameStack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.title,
            }}>
            <GameStack.Screen
                name="Clue"
                component={ClueScreen}
                options={({ navigation, route }) => ({
                    headerLeft: (props) => <BackButton navigation={navigation} {...props} />,
                    headerRight: (props) => <React.Fragment />,
                    title: 'Pistas Iniciais '
                })} />
            <GameStack.Screen
                name="Resume"
                component={ResumeScreen}
                options={({ navigation, route }) => ({
                    headerLeft: (props) => <BackButton navigation={navigation} {...props} />,
                    headerRight: (props) => <React.Fragment />,
                    title: 'Resumo'
                })} />
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