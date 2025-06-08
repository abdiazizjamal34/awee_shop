import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (

    <>
    
    <View style={styles.greating}>
      <Text style={styles.title}>Profile </Text>
    </View><View style={styles.container}>
        <Text style={styles.title}> AWEE Shop</Text>
      </View>
      
      
      </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,

    flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 22, fontWeight: '600'
  },

  greating: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    marginTop: 20
  }
});
