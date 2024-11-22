import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../shared/components/layout/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../shared/theme/theme';

export const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <PrimaryButton
                onPress={() => navigation.navigate('Users' as never)}
                label="Users"
            />
            <PrimaryButton
                onPress={() => navigation.navigate('Settings' as never)}
                label="Settings"
            />
        </View>
    );
};

