// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const Stack = createStackNavigator();

const tales = [
    { id: '1', title: 'Cinderella', imageUrl: 'https://picsum.photos/200/300?random=1' },
    { id: '2', title: 'Snow White', imageUrl: 'https://picsum.photos/200/300?random=2' },
    { id: '3', title: 'Sleeping Beauty', imageUrl: 'https://picsum.photos/200/300?random=3' },
    { id: '4', title: 'Rapunzel', imageUrl: 'https://picsum.photos/200/300?random=4' },
    { id: '5', title: 'Hansel and Gretel', imageUrl: 'https://picsum.photos/200/300?random=5' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Tale', { tale: item })}
        >
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { tale } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.taleContainer}>
                <Image source={{ uri: tale.imageUrl }} style={styles.taleImage} />
                <Text style={styles.taleTitle}>{tale.title}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginTop: 10,
    },
    list: {
        padding: 20,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    itemText: {
        fontSize: 18,
    },
    taleContainer: {
        padding: 20,
        alignItems: 'center',
    },
    taleImage: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    taleTitle: {
        fontSize: 24,
        textAlign: 'center',
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}