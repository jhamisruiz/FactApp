
import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { userService } from '../../shared/services/api/userService';
import { User } from '../../shared/types';
import { PrimaryButton, SuccessButton } from '../../shared/components/layout/PrimaryButton';

export const UserScreen = () => {
    const [user, setUser] = useState<Partial<User>>({});
    const { params } = useRoute<RouteProp<{ params: { id?: number, viewOnly?: boolean, createOnly?: true, updateOnly?: true } }>>();
    const navigation = useNavigation();
    const isViewOnly = params?.viewOnly;
    const isCreateOnly = params?.createOnly;

    const fetchUser = async (id: number) => {
        try {
            const data = await userService.GetById(id);
            setUser(data);
        } catch (error) {
            Alert.alert('Error', 'No se pudo cargar el usuario.');
        }
    };


    const handleSave = async () => {
        if (
            !user.name?.trim() ||
            !user.last_name?.trim() ||
            !user.user_name?.trim() ||
            !user.email?.trim() ||
            !user.telefono?.trim()
        ) {
            Alert.alert('Error', 'Por favor, completa todos los campos requeridos.');
            return;
        }
        try {
            if (params?.id) {
                await userService.Update(params.id, user);
                Alert.alert('Éxito', 'Usuario actualizado.');
            } else {
                await userService.Create(user as Omit<User, 'id'>);
                Alert.alert('Éxito', 'Usuario creado.');
            }
            navigation.navigate('Users' as never);
        } catch (error) {
            Alert.alert('Error', 'No se pudo guardar el usuario.');
        }
    };

    useEffect(() => {
        if (isCreateOnly) {
            setUser({
                name: '',
                last_name: '',
                user_name: '',
                email: '',
                telefono: '',
            });
        } else if (params?.id) {
            fetchUser(params.id);
        }
    }, [params?.id, isCreateOnly]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={user.name || ''}
                onChangeText={(text) => setUser({ ...user, name: text })}
                editable={!isViewOnly}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={user.last_name || ''}
                onChangeText={(text) => setUser({ ...user, last_name: text })}
                editable={!isViewOnly}
            />
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={user.user_name || ''}
                onChangeText={(text) => setUser({ ...user, user_name: text })}
                editable={!isViewOnly}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email || ''}
                onChangeText={(text) => setUser({ ...user, email: text })}
                editable={!isViewOnly}
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={user.telefono || ''}
                onChangeText={(text) => setUser({ ...user, telefono: text })}
                editable={!isViewOnly}
            />
            {!isViewOnly && (
                <SuccessButton
                    onPress={handleSave}
                    label="Guardar"
                />
            )}
            <PrimaryButton
                onPress={() => navigation.navigate('Users' as never)}
                label="Regresar"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});

