import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UsersScreen } from '../../screens/Users/UsersScreen';
import { UserScreen } from '../../screens/Users/userScreen';
import { UserStackParamList } from '../types';

const Stack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
);
