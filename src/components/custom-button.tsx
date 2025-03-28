import { ComponentProps, ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type CustomButton = {
    title: string;
    rightIcon?: ReactNode;
} & ComponentProps<typeof Pressable>;

export function CustomButton({ title, rightIcon, ...rest }: CustomButton) {
    return (
        <Pressable style={styles.button} {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.rightIcon}>
                {rightIcon}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    rightIcon: {
        position: 'absolute',
        right: 20
    },
})