import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { registerUser } from '../services/authservice';

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const handleRegister = async () => {
    try {
        const date = await registerUser(email, password, name, phone);
        console.log('Registration successful:', date);
        navigation.navigate('Login'); // Navigate to Login on successful registration
        
    } catch (error) {
        console.error('Registration error:', (error as any).response?.data || (error as any).message);
        const errorMessage = (error as any)?.response?.data?.message || 'Something went wrong';
        Alert.alert('Registration Failed', errorMessage);
        
    }

    console.log('Registering:', email, password);
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setName}
        value={name}
        autoCapitalize="none"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setEmail}
        value={email}
        keyboardType="default"
      />
       <TextInput
        style={styles.input}
        placeholder="Pgone Number"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
       <TextInput
        style={styles.input}
        placeholder="Comfirm Password"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 , backgroundColor: '#fff'},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  input: {
    width: '100%', padding: 14, borderRadius: 12,
    backgroundColor: '#F1F1F1', marginBottom: 14, fontSize: 16
  },
  link: {
    color: 'blue', marginTop: 16, textAlign: 'center'
  },
});
