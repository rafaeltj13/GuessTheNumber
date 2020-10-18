import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../utils/constants';
import Button from '../../../components/button/Button';
import { createScoreRequest } from '../actions';

const ResumeScreen = ({ navigation, startTime, endTime, guess, attempts, name, createScore, loading, error }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        createScore({
            name,
            guess,
            attempts,
            time: Math.floor((endTime - startTime) / 1000)
        });
        setSubmitted(true)
    };

    useEffect(
        () => {
            if (submitted && !loading) {
                if (error) {
                    setSubmitted(false);
                    navigation.replace('Home')
                } else {
                    navigation.replace('Ranking')
                }
            }
        },
        [loading, error]
    );

    return (
        <View style={styles.homeContainer}>
            <View style={styles.content}>
                <Text style={styles.title}>Consegui! O número escolhido por {name} era {guess}</Text>
                <Text style={styles.time}>Tentativas: {attempts}</Text>
                <Text style={styles.time}>Tempo decorrido: {Math.floor((endTime - startTime) / 1000)} segundo(s)</Text>
                <Button label="Registrar pontuação" variant="outlined" onClick={() => handleSubmit()} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: defaultStyles.heightPercentage('90%')
    },
    title: {
        color: defaultStyles.primaryColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    time: {
        fontSize: 16,
        color: defaultStyles.fontColor,
        marginVertical: 16
    }
});

const mapStateToProps = ({ game }) => ({
    loading: game.loading,
    error: game.error,
    startTime: game.startTime,
    endTime: game.endTime,
    guess: game.guess,
    attempts: game.attempts,
    name: game.name
});

const mapDispatchToProps = (dispatch) => ({
    createScore: scoreBody => dispatch(createScoreRequest(scoreBody))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeScreen);