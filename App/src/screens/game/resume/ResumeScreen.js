import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../utils/constants';
import TextField from '../../../components/textField/TextField';
import Button from '../../../components/button/Button';

const ResumeScreen = ({ navigation, startTime, endTime, guess, attempts }) => {
    const [form, setFormValue] = useState({
        name: '',
    });

    return (
        <View style={styles.homeContainer}>
            <View style={styles.content}>
                <Text style={styles.title}>Consegui! O número escolhido foi: {guess}</Text>
                <Text style={styles.time}>Tentativas: {attempts}</Text>
                <Text style={styles.time}>Tempo decorrido: {Math.floor((endTime - startTime) / 1000)} segundo(s)</Text>
                <TextField
                    name="name"
                    setFieldValue={(name, text) => setFormValue({ ...form, [name]: text })}
                    placeholder="Digite o seu nome"
                />
                <Button label="Registrar pontuação" variant="outlined" onClick={() => console.log(form)} />
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
    attempts: game.attempts
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeScreen);