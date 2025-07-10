import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingView = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#6C63FF" /> 
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff", // ou #000 selon ton thème
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
});
