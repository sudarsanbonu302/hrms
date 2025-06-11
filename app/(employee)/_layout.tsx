import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function EmployeeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1B95C8",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="welcome"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      
    </Tabs>
  );
}