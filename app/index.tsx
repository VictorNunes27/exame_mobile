import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CatImage from './src/components/CatImage';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CatImage />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
