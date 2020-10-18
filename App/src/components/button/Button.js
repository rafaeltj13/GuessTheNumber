import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { defaultStyles } from '../../utils/constants';
import { AntDesign } from '@expo/vector-icons';

const CustomButton = ({ onClick, label, variant, icon, ...props }) => {

    const [selectedStyle, setSelectedStyle] = useState({
        button: styles.button,
        text: styles.text
    });

    const getPersonalizedStyles = useCallback(() => {
        switch (variant) {
            case 'outlined':
                setSelectedStyle({
                    button: styles.buttonOutlined,
                    text: styles.textPrimary
                });
                break;

            default:
                setSelectedStyle({
                    button: styles.button,
                    text: styles.text
                });
                break
        }
    }, []);

    useEffect(() => {
        getPersonalizedStyles();
    }, [getPersonalizedStyles]);

    const getIconColor = () => variant === 'outlined' ? defaultStyles.primaryColor : defaultStyles.secondaryColor;

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={selectedStyle.button}
                onPress={onClick && (() => onClick())}
            >
                {label && <Text style={selectedStyle.text}>{label}</Text>}
                {icon && <AntDesign name={icon} size={24} color={getIconColor()} />}
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 16
    },
    button: {
        alignItems: "center",
        backgroundColor: defaultStyles.primaryColor,
        padding: 10,
        borderRadius: 8
    },
    buttonOutlined: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: defaultStyles.primaryColor,
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: defaultStyles.secondaryColor,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    textPrimary: {
        color: defaultStyles.primaryColor,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1
    }
})

export default CustomButton;