import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
 import { useAuth } from '../../shared/hooks/useAuth';
/*import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../shared/types';
 */
export const LoginScreen = () => {
    const navigation = useNavigation();
    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
     const { login } = useAuth();
    /*const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 */
    /**/ const handleLogin = async () => {
        try {
            await login(user_name, password);

            /* const data = await authService.login(user_name, password);
            console.log(data); */
            navigation.navigate('Main' as never); // Redirige a la pantalla Home
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Credenciales incorrectas. Intenta nuevamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="User or Email"
                value={user_name}
                onChangeText={setUserName}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={() => handleLogin()} />{/* onPress={handleLogin} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});

