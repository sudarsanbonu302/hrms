import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeaveFormScreen from "./LeaveFormScreen";
import LeaveListScreen from "../(Hrpage)/LeaveListScreen";
import RegularizationScreen from "../(Hrpage)/RegularizationScreen";
import AttendanceScreen from "../(Hrpage)/AttendanceScreen";
import ReimbursementScreen from "../(Hrpage)/ReimbursementScreen";
import CustomDrawerContent from "../(Hrpage)/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function HrDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#1CA6D9", width: 260 },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        overlayColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Drawer.Screen name="LeaveForm" component={LeaveFormScreen} options={{ drawerLabel: "Leave Application" }} />
      <Drawer.Screen name="LeaveList" component={LeaveListScreen} options={{ drawerLabel: "List of Applied Leave" }} />
      <Drawer.Screen name="Regularization" component={RegularizationScreen} options={{ drawerLabel: "Request Regularization" }} />
      <Drawer.Screen name="Attendance" component={AttendanceScreen} options={{ drawerLabel: "View Monthly Attendance" }} />
      <Drawer.Screen name="Reimbursement" component={ReimbursementScreen} options={{ drawerLabel: "Reimbursement Request" }} />
    </Drawer.Navigator>
  );
}