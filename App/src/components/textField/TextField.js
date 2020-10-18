import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { defaultStyles } from '../../utils/constants';

const TextField = ({ form, name, setFieldValue, placeholder, ...props }) => (
    <View style={styles.inputContainer}>
        <TextInput
            {...props}
            style={styles.input}
            onChangeText={text => setFieldValue(name, text)}
            placeholder={placeholder && placeholder}
            value={form[name]}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 16
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 16,
        color: defaultStyles.fontColor
    }
})

export default TextField;