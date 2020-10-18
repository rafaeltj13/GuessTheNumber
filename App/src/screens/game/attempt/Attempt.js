import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from '../../../components/button/Button';
import { defaultStyles } from '../../../utils/constants';
import { addAttemptRequest, setTimerRequest } from '../actions';

const Attempt = ({ navigation, actualAttempt, addAttempt, guess, setTimer, endTime, cleanForm, ...props }) => {

    const [correctGuess, setCorrectGuess] = useState(null);
    const [feedBackUser, setFeedBackUser] = useState(false);

    const handleGuessError = () => {
        setCorrectGuess(false)
    };

    const handleAttempt = type => {
        addAttempt(type);
        setFeedBackUser(true);
        setTimeout(() => {
            setCorrectGuess(null);
            setFeedBackUser(false);
        }, 2500);
    };

    const handleSuccess = () => {
        setTimer('endTime');
        cleanForm();
    };

    return (
        <View style={styles.attemptContainer}>
            {!feedBackUser && <View>
                <Text style={styles.title}>Você pensou no número</Text>
                <Text style={styles.number}>{guess}</Text>
                {correctGuess === null &&
                    <View>
                        <Text style={styles.title}>Correto?</Text>
                        <View style={styles.buttons}>
                            <Button icon="close" onClick={() => handleGuessError()} />
                            <Button icon="check" onClick={() => handleSuccess()} />
                        </View>
                    </View>
                }
                {
                    correctGuess === false &&
                    <View>
                        <Text style={styles.title}>Hmmm... o seu número é:</Text>
                        <View style={styles.buttons}>
                            <Button icon="minus" onClick={() => handleAttempt('low')} />
                            <Button icon="plus" onClick={() => handleAttempt('high')} />
                        </View>
                    </View>
                }
            </View>
            }
            {feedBackUser && <View>
                <Text style={styles.feedback}>OK!</Text>
            </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({

    title: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    number: {
        alignSelf: 'center',
        fontSize: 82,
        fontWeight: 'bold',
        color: defaultStyles.primaryColor,
        marginVertical: 16
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: defaultStyles.widthPercentage('50%'),
        alignItems: 'center',
        alignSelf: 'center'
    },
    feedback: {
        alignSelf: 'center',
        fontSize: 112,
        fontWeight: 'bold',
        color: defaultStyles.primaryColor,
        marginVertical: 16
    }
});

const mapStateToProps = ({ game }) => ({
    loading: game.loading,
    error: game.error,
    attempts: game.attempts,
    guess: game.guess,
    endTime: game.endTime
});

const mapDispatchToProps = (dispatch) => ({
    addAttempt: value => dispatch(addAttemptRequest(value)),
    setTimer: type => dispatch(setTimerRequest(type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Attempt);