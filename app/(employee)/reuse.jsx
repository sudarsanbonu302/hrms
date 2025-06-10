import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authThunks';
import { useRouter } from 'expo-router';

const aashditLogo = require('../../assets/images/logo.png');
const headerbg = require('../../assets/images/logoshawdo.png');

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (!employeeId || !password) {
      Alert.alert('Error', 'Please enter both employee ID and password');
      return;
    }

    try {
      await dispatch(loginUser({ employeeId, password })).unwrap();
      router.replace('/home'); // Redirect after successful login
    } catch (err) {
      // Error is already handled in the thunk
    }
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
        <Text style={styles.loginTitle}>Login with{'\n'}your credential</Text>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
        </View>

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <AntDesign name="idcard" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Employee Id"
            placeholderTextColor="#aaa"
            value={employeeId}
            onChangeText={setEmployeeId}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={20} color="#aaa" style={styles.icon} />
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
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#aaa"
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <View style={styles.backCircle}>
            <Ionicons name="arrow-undo-outline" color="#aaa" size={15} />
          </View>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles ...

  errorContainer: {
    backgroundColor: '#FFEBEE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
  },
});

export default EmployeeLogin;