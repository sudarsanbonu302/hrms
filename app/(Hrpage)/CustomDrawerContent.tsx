import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");
export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;
  return (
    <View style={styles.drawerContainer}>
      
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Human Resource</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.closeDrawer()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("LeaveList")}>
        <Text style={styles.menuText}><Ionicons name="ellipse" size={10} color="#FAAC1A" style={styles.dotIcon} /> List of Applied Leave</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Regularization")}>
        <Text style={styles.menuText}><Ionicons name="ellipse" size={10} color="#FAAC1A" style={styles.dotIcon} /> Request Regularization</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Attendance")}>
        <Text style={styles.menuText}><Ionicons name="ellipse" size={10} color="#FAAC1A" style={styles.dotIcon} /> View Monthly Attendance</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Reimbursement")}>
        <Text style={styles.menuText}><Ionicons name="ellipse" size={10} color="#FAAC1A" style={styles.dotIcon} /> Reimbursement Request</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#209CD1",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  headerBox: {
    backgroundColor: "#FAAC1A",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 30,
  },
  headerText: {
    flex: 1,
    color: "#000000",
    fontWeight: 400,
    fontSize: 18,
  },
  headerIcon: {
    marginLeft: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
    justifyContent: "space-between",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  dotIcon: {
  marginRight: 8,
  marginTop: 1,
},
    closeButton: {
    marginLeft: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 2,
    elevation: 2,
  },
});