import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from '../../components/button/Button';
import { defaultStyles } from '../../utils/constants';

const HomeScreen = ({ navigation }) => (
    <View style={styles.homeContainer}>
        <View style={styles.content}>
            <Text style={styles.title}>Bem vindo ao Guess The Number!</Text>
            <Text style={styles.description}>Você deve pensar em um número primo entre 1 e 1000, garantimos que iremos acertar o número pensado!</Text>
            <Button label="Começar" onClick={() => navigation.navigate('Game', { screen: 'Clue' })} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: defaultStyles.heightPercentage('90%')
    },
    content: {
        width: '80vw'
    },
    title: {
        color: defaultStyles.primaryColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    description: {
        color: defaultStyles.fontColorLight,
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center'
    },
});

export default HomeScreen;