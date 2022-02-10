import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FloatingButton from "../components/FloatingButton";

export default function Maps() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MapView style={styles.map} />
            <FloatingButton style={{ bottom: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
