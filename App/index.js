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

const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#ff99ff'];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}
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
        <SafeAreaView style={taleStyles.container}>
            <View style={taleStyles.taleContainer}>
                <Image source={{ uri: tale.imageUrl }} style={taleStyles.taleImage} />
                <Text style={taleStyles.taleTitle}>{tale.title}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f7ff',
        marginTop: 10,
    },
    list: {
        padding: 20,
    },
    itemContainer: {
        backgroundColor: '#ffebd6',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "#ffa446",
        alignItems: 'center',
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

const taleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5f6df',
        marginTop: 10,
    },
    taleContainer: {
        padding: 20,
        alignItems: 'center',
    },
    taleImage: {
        width: 200,
        height: 300,
        borderRadius: 20,
        borderColor: '#70a1cf',
        borderWidth: 3,
        marginBottom: 20,
    },
    taleTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4d8acb',
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