import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type Card = { title: string } & PropsWithChildren;

export function Card({ title, children }: Card) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap: 20,

        // shadows ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // shadows android
        elevation: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center'
    },
})