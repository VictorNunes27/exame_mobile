import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CatImage = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);


    const fetchCatImage = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            setImageUrl(data[0].url);
        } catch (error) {
            console.error('Erro ao buscar imagem de gato:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gato</Text>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <Text style={styles.text}>Clica para ver gato</Text>
            )}
            <Button title="Ver gato" onPress={fetchCatImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default CatImage;
