import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert } from 'react-native';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { userService } from '../../shared/services/api/userService';
import { User, UserStackParamList } from '../../shared/types';

export const UsersScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation<NavigationProp<UserStackParamList>>();

  const listUsers = async () => {
    try {
      const data = await userService.List();
      setUsers(data);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar los usuarios.');
    }
  };

  const deleteUser = async (id: number) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este usuario?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await userService.Delete(id);
              Alert.alert('Éxito', 'Usuario eliminado.');
              listUsers(); // Refresca la lista
            } catch (error) {
              Alert.alert('Error', 'No se pudo eliminar el usuario.');
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    listUsers();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      listUsers();
    }, [])
  );

  const renderUser = ({ item }: { item: User }) => (
    <View style={styles.userCard}>
      <Text style={styles.name}>{item.name} {item.last_name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.phone}>{item.telefono}</Text>
      <View style={styles.actions}>
        <Button
          title="Editar"
          onPress={() => navigation.navigate('User', { id: item.id })}
        />
        <Button
          title="Ver"
          onPress={() => navigation.navigate('User', { id: item.id, viewOnly: true })}
        />
        <Button
          title="Eliminar"
          onPress={() => deleteUser(item.id)}
          color="red"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
      />
      <Button
        title="Crear Usuario"
        onPress={() => navigation.navigate('User', { createOnly: true })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  userCard: { padding: 16, backgroundColor: '#f9f9f9', marginVertical: 8, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { color: '#555' },
  phone: { color: '#777' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});

