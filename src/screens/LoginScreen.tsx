import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { loginUser } from '../services/authservice';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try{
        const data = await loginUser(email, password);
        console.log('Login successful:', data);

        navigation.navigate('Home'); // Navigate to Home on successful login
    } catch (error) {
        console.error('Login error:', (error as any).response?.data || (error as any).message);
        const errorMessage = (error as any)?.response?.data?.message || 'Something went wrong';
        Alert.alert('Login Failed', errorMessage);

    }


          



  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Login to continue using Awee shop app</Text>

      <Image
        source={require('../assets/sah.jpeg')} 
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        style={[styles.input, styles.placeholder]} 
        placeholder="Email"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#A9A9A9'}

        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default LoginScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
      padding: 24, backgroundColor: '#fff'
    },
    title: {
      fontSize: 28, fontWeight: 'bold', marginBottom: 8, color: '#2C2C2C'
    },
    subtitle: {
      fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center'
    },
    image: {
      width: 240, height: 180, marginBottom: 30
    },
    input: {
      width: '100%', padding: 14, borderRadius: 12,
      backgroundColor: '#F1F1F1', marginBottom: 14, fontSize: 16
    },
    button: {
      backgroundColor: '#6A5AE0',
      paddingVertical: 14, borderRadius: 12,
      width: '100%', alignItems: 'center', marginTop: 10
    },
    buttonText: {
      color: '#fff', fontSize: 16, fontWeight: '600'
    },
    link: {
            color: 'blue', marginTop: 16, textAlign: 'center'
          },
          placeholder: {
            color: 'black', fontSize: 16
          },

  });
  
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

