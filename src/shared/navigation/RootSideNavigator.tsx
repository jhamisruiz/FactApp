/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
    createDrawerNavigator, DrawerContentComponentProps,
    DrawerContentScrollView, DrawerItemList,
} from '@react-navigation/drawer';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import { UsersScreen } from '../../screens/Users/UsersScreen';
import { SettingsScreen } from '../../screens/Settings/SettingsScreen';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { UserScreen } from '../../screens/Users/userScreen';

const Drawer = createDrawerNavigator();

export const RootSideNavigator = () => {

    const dimensions = useWindowDimensions();


    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}


            screenOptions={{
                drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',


                headerShown: true,

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20,
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="User" component={UserScreen} />
            <Drawer.Screen name="Users" component={UsersScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

        const navigation = useNavigation();
        const handleLogout = () => {
            //dispatch(logout()); // Limpia el estado global
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' as never }], // Vuelve al StackNavigator (Login)
            });
        };

    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 200,
                    borderWidth: 1,
                    borderColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 50,
                }}
            />

            <DrawerItemList {...props} />
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: globalColors.primary,
                    padding: 10,
                    borderRadius: 5,
                }}
                onPress={handleLogout}
            >
                <Text style={{
                    color: globalColors.primary,
                    textAlign: 'center',
                }}>
                    Logout
                </Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    );
};
