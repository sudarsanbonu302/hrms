
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Index() {
   const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  return (

       <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.title}>AASHDIT</Text>
        <Text style={styles.subtitle}>HR Management Application</Text>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>

      {/* Login Box */}
      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Login with{'\n'}your credential</Text>

        {/* Employee ID */}
        <View style={styles.inputContainer}>
          {/* <Icon name="card-account-details-outline" size={20} color="#888" /> */}
          <TextInput
            placeholder="Enter Employee Id"
            value={employeeId}
            onChangeText={setEmployeeId}
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          {/* <Icon name="lock-outline" size={20} color="#888" /> */}
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#888"
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            {/* <Icon name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#888" /> */}
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          {/* <Icon name="arrow-left-circle-outline" size={20} color="#888" /> */}
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#008CBA',
    alignItems: 'center',
   
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#008CBA',
     backgroundImage: 'url(../assets/images/logo-shawdo.ng)', 
  },
  welcome: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFC107', // Yellow-orange
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 20,
  },
  loginBox: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 15,
padding: 20,
    marginTop: 100,
   
    elevation: 5,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  backText: {
    marginLeft: 5,
    color: '#888',
  },
});