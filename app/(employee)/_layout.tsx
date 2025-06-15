import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs, usePathname } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function EmployeeLayout() {
  const pathname = usePathname();
  const hideTabBar = pathname.endsWith("/employeelogin");

  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FAAC1A", 
        tabBarInactiveTintColor: "#fff", 
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "400",
          marginBottom: 16,
        },
         tabBarIconStyle: {
      marginTop: 0,    
      marginBottom: 0,  
    },
        tabBarStyle: [
          {
            backgroundColor: "#209CD1", 
            borderTopWidth: 0,
            elevation: 0,
            height: 95,
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
            
          height: 120, 
          paddingBottom: 20,
          paddingTop: 10,  
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
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
          color={color} size={size}
            />
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