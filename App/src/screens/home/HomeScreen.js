import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import { defaultStyles } from '../../utils/constants';
import { setNameRequest } from '../game/actions';

const HomeScreen = ({ navigation, setName }) => {
    const [form, setFormValue] = useState({
        name: '',
    });

    const handleClick = () => {
        setName(form['name']);
        setFormValue(prevForm => ({ ...prevForm, name: '' }));
        navigation.replace('Game', { screen: 'Clue' });
    };

    return (
        <View style={styles.homeContainer}>
            <View style={styles.content}>
                <Text style={styles.title}>Bem vindo ao Guess The Number!</Text>
                <Text style={styles.description}>Você deve pensar em um número primo entre 1 e 1000, garantimos que iremos acertar o número pensado!</Text>
                <TextField
                    name="name"
                    form={form}
                    setFieldValue={(name, text) => setFormValue({ ...form, [name]: text })}
                    placeholder="Digite o seu nome"
                />
                <Button
                    label="Começar"
                    onClick={() => handleClick()}
                    disabled={form['name'] === ''}
                    style={form['name'] === '' && styles.disabled}
                />
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
    content: {
        width: defaultStyles.widthPercentage('80%')
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
    disabled: {
        opacity: 0.5
    }
});

const mapDispatchToProps = (dispatch) => ({
    setName: name => dispatch(setNameRequest(name))
});

export default connect(
    null,
    mapDispatchToProps
)(HomeScreen);