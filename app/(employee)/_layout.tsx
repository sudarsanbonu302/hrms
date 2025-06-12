import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs, usePathname } from "expo-router";

export default function EmployeeLayout() {
  const pathname = usePathname();
  const hideTabBar = pathname.endsWith("/employeelogin");

  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff", // White active icon/text
        tabBarInactiveTintColor: "#fff", // White inactive icon/text
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "400",
          marginBottom: 8,
        },
        tabBarStyle: [
          {
            backgroundColor: "transparent", // We'll use a gradient background
            borderTopWidth: 0,
            elevation: 0,
            height: 80,
            position: "absolute",
          },
          hideTabBar && { display: "none" },
        ],
        tabBarBackground: () => (
          <LinearGradient
            colors={["#28ABE2", "#1589BA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
      }}

      
    >
      <Tabs.Screen
        name="welcome"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          tabBarStyle:  {
            
          height: 120, // 👈 set your desired height here
          paddingBottom: 20, // optional: to center icons/text nicely
          paddingTop: 10,    // optional: top padding for better spacing
        },
        }}
      />
      <Tabs.Screen
        name="hr"
        options={{
          title: "HR",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="itasset"
        options={{
          title: "IT Asset",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="laptop-outline" color={color} size={size} />
          ),
        }}
      />
         <Tabs.Screen
        name="launch"
        options={{
          title: "Launch",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="laptop-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
      
    </Tabs>
  );
}