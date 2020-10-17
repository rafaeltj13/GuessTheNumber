import React from 'react';
import { HeaderBackButton } from '@react-navigation/stack';
import { defaultStyles } from '../../utils/constants'

const BackButton = ({ navigation, ...props }) => {
    return (
        <HeaderBackButton
            {...props}
            tintColor={defaultStyles.secondaryColor}
            onPress={() => navigation.goBack()}
        />
    );
};

export default BackButton;