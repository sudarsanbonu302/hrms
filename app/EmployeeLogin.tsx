import { login } from "@/src/api/authAPI";
import { storeToken } from "@/src/utils/tokenService";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const aashditLogo = require("../assets/images/logo.png");
const headerbg = require("../assets/images/logoshawdo.png");
const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  // const handleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     const data = await login(userName, password);
  //     console.log("Login API response:", data);
  //     if (data?.data) {
  //       await storeToken(data.data);
  //       router.replace("/(employee)/welcome");
  //     } else {
  //       alert("Invalid credentials or token not received");
  //     }
  //   } catch (error) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };
    const handleLogin = () => {
    setLoading(true);
    router.replace("/(employee)/welcome");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={headerbg} style={styles.headerimg} />
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.title}>AASHDIT</Text>
          <Text style={styles.subtitle}>HR Management Application</Text>
        </View>
        <View style={styles.headerlogo}>
          <Image source={aashditLogo} style={styles.logo} />
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login with{"\n"}your credential</Text>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="idcard" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Employee Id"
            placeholderTextColor="#aaa"
            value={userName}
            onChangeText={setuserName}
          />
        </View>

        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="lock"
            size={20}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#aaa"
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? "please wait" : "Login"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backCircle}>
            <Ionicons name="arrow-undo-outline" color="#aaa" size={15} />
          </View>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmployeeLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#1B95C8",
  },
  headerimg: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    position: "absolute",
    top: 50,
    left: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: 100,
  },
  welcome: {
    color: "white",
    fontSize: 16,
  },
  title: {
    fontSize: 47,
    fontWeight: "900",
    color: "#FAC11A",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "400",
  },
  headerlogo: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: -10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  formContainer: {
    marginTop: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    flex: 1,
  },
  loginTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#333",
    marginTop: 30,
  },
  dividerContainer: {
    alignItems: "center",
    marginVertical: 12,
    marginBottom: 40,
  },
  divider: {
    width: "70%",
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 18,
  },
  icon: {
    marginRight: 5,
    marginLeft: 8,
  },
  iconRight: {
    marginLeft: "auto",
  },
  input: {
    flex: 1,
    color: "#333",
    paddingLeft: 15,
  },
  loginButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 5,
    alignItems: "center",
    elevation: 2,
  },
  loginButtonText: {
    color: "#000",
    fontSize: 18,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    alignSelf: "center",
  },
  backText: {
    marginLeft: 5,
    color: "#555",
    fontSize: 16,
  },
  backCircle: {
    width: 25,
    height: 25,
    borderRadius: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
});
