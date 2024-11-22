import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../screens/Auth/LoginScreen';
import { RootSideNavigator } from './RootSideNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="Main" // Nombre de la pantalla que representa el DrawerNavigator
                component={RootSideNavigator}
                options={{ headerShown: false }} // Oculta el header del Stack cuando se carga el Drawer
            />
        </Stack.Navigator>
    );
};
