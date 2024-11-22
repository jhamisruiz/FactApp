import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';

export const userStyle = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    userCard: { padding: 16, backgroundColor: '#f9f9f9', marginVertical: 8, borderRadius: 8 },
    name: { fontSize: 18, fontWeight: 'bold' },
    email: { color: '#555' },
    phone: { color: '#777' },
    actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});
