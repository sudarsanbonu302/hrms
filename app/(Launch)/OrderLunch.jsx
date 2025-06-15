import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function OrderLunch() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/biryani.png")} // Make sure this path is correct
        style={styles.image}
      />
      <Text style={styles.title}>Chicken Biriyani</Text>

      <TextInput
        placeholder="Add Description"
        placeholderTextColor="#888"
        style={styles.input}
        multiline
      />

      <View style={styles.priceRow}>
        <Text style={styles.label}>Item Price</Text>
        <Text style={styles.value}>Rs 130.00</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.label}>Subsidy Discount</Text>
        <Text style={styles.value}>Rs 30.00</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.priceRow}>
        <Text style={[styles.label, styles.totalText]}>Total Amount :</Text>
        <Text style={[styles.value, styles.totalText]}>Rs 100.00</Text>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>ORDER NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF3F9",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    height: 60,
    textAlignVertical: "top",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
  totalText: {
    fontWeight: "bold",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginVertical: 10,
  },
  orderButton: {
    backgroundColor: "#F9A825",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  orderButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
