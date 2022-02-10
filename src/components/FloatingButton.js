import React from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, useNativeDriver } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default class FloatingButton extends React.Component {
    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        this.open = !this.open;
    };
    render() {
        const pinStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60],
                    }),
                },
            ],
        };

        const likeStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -120],
                    }),
                },
            ],
        };

        const heartStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -180],
                    }),
                },
            ],
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"],
                    }),
                },
            ],
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1],
        });
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, heartStyle, opacity]}>
                        <AntDesign name="hearto" size={20} color="#F0248B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, likeStyle, opacity]}>
                        <Entypo name="thumbs-up" size={20} color="#F0248B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
                        <Entypo name="location-pin" size={20} color="#F0248B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        position: "absolute",
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#F0234B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
    },
    menu: {
        backgroundColor: "#F0234B",
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF",
    },
});
