import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NormalNotification from './src/Compponents/NormalNotification';
import { initializeNotifications } from './src/services/notificationService';

const App = () => {

  useEffect(() => {
    initializeNotifications();
  })


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <NormalNotification />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})