import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import TextField from '../../../components/textField/TextField';
import Button from '../../../components/button/Button';
import { defaultStyles } from '../../../utils/constants';
import { addGuessRequest, setTimerRequest } from '../actions';
import Attempt from '../attempt/Attempt';

const ClueScreen = ({ navigation, attempts, addGuess, setTimer, ...props }) => {
    const [guessStep, setGuessStep] = useState(1);
    const [showAttempt, setShowAttempt] = useState(false);
    const [form, setFormValue] = useState({
        "1": '',
        "2": '',
        "3": ''
    });

    const handleTip = () => {
        addGuess(guessStep, form[guessStep]);
        setShowAttempt(true);
    };

    useEffect(() => {
        if (attempts > 0) {
            setTimeout(() => {
                setGuessStep(guessStep + 1);
                setShowAttempt(false);
            }, 2000);
        }
    }, [attempts]);

    useEffect(() => {
        setTimer('startTime')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {(showAttempt || (guessStep > 3)) && <Attempt navigation={navigation}/>}
                {!showAttempt && guessStep === 1 &&
                    <View>
                        <Text style={styles.title}>Essa vai ser a minha primeira tentativa...</Text>
                        <Text style={styles.stepDescription}>Qual a soma dos dígitos do número que você pensou?</Text>
                        <Text style={styles.tip}>Lembrando que o número tem que ser primo!</Text>
                        <TextField
                            name="1"
                            setFieldValue={(name, text) => setFormValue({ ...form, [name]: text })}
                            keyboardType="number-pad"
                            placeholder="Digite um numero"
                        />
                        <Button label="Confirmar" onClick={() => handleTip()} />
                    </View>
                }
                {!showAttempt && guessStep === 2 &&
                    <View>
                        <Text style={styles.title}>Tudo bem, preciso de uma outra dica!</Text>
                        <Text style={styles.stepDescription}>Qual seria o resto da divisao por 7 do número que você pensou?</Text>
                        <Text style={styles.tip}>Talvez com esse valor eu adivinhe o numero que voce pensou</Text>
                        <TextField
                            name="2"
                            setFieldValue={(name, text) => setFormValue({ ...form, [name]: text })}
                            keyboardType="number-pad"
                            placeholder="Digite um numero"
                        />
                        <Button label="Confirmar" onClick={() => handleTip()} />
                    </View>
                }
                {!showAttempt && guessStep === 3 &&
                    <View>
                        <Text style={styles.title}>Prometo que essa e a ultima dica que vou pedir...</Text>
                        <Text style={styles.stepDescription}>Qual o produto dos digitos do número que você pensou?</Text>
                        <Text style={styles.tip}>Pode desconsiderar o numero 0</Text>
                        <TextField
                            name="3"
                            setFieldValue={(name, text) => setFormValue({ ...form, [name]: text })}
                            keyboardType="number-pad"
                            placeholder="Digite um numero"
                        />
                        <Button label="Confirmar" onClick={() => handleTip()} />
                    </View>
                }
                <Text style={styles.attemptsText}>Número de tentativas: {attempts}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: defaultStyles.heightPercentage('90%')
    },
    content: {
        width: defaultStyles.widthPercentage('100%'),
        paddingHorizontal: 16
    },
    attemptsText: {
        alignSelf: 'center',
        fontSize: 16,
        color: defaultStyles.primaryColor,
        fontWeight: 'bold',
        marginTop: 32
    },
    stepDescription: {
        color: defaultStyles.fontColor,
        fontSize: 18,
        marginBottom: 16
    },
    tip: {
        color: defaultStyles.fontColorLight,
        fontSize: 16
    },
    title: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: defaultStyles.primaryColor,
        marginBottom: 64
    },
});

const mapStateToProps = ({ game }) => ({
    loading: game.loading,
    error: game.error,
    attempts: game.attempts
});

const mapDispatchToProps = (dispatch) => ({
    addGuess: (step, tip) => dispatch(addGuessRequest(step, tip)),
    setTimer: type => dispatch(setTimerRequest(type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClueScreen);