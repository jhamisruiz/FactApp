import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens/Auth/LoginScreen';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

