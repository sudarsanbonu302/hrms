import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const aashditLogo = require('../../assets/images/logo.png');
const headerbg = require('../../assets/images/logoshawdo.png');

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient
      colors={['#28ABE2', '#1589BA']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
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
          <Text style={styles.loginTitle}>Login with{'\n'}your credential</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Employee Id"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="#aaa"
                style={styles.iconRight}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#333" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EmployeeLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  headerimg: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    top: 50,
    left: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 120,
  },
  welcome: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 45,
    fontWeight: 900,
    color: '#FAC11A',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
     fontWeight: 400,
  },
  logo: {
    width: 83,
    height: 83,
    resizeMode: 'contain',
     backgroundColor: 'white',
    
  },
  headerlogo:{
   width: 65,
    height: 23,
  },
  formContainer: {
    marginTop: 40,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    flex: 1,
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '500',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  icon: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    height: 45,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  backText: {
    marginLeft: 5,
    color: '#333',
    fontSize: 16,
  },
});
