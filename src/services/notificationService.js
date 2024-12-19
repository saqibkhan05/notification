// src/services/notificationService.js
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission, setupNotificationListeners } from '../firebase/notificationHandler';

export async function initializeNotifications() {
    // Request user permissions
    await requestUserPermission();

    // Get FCM token
    const token = await messaging().getToken();
    console.log('FCM Token:', token);

    // Set up listeners
    setupNotificationListeners();
}

export async function subscribeToTopic(topic) {
    await messaging().subscribeToTopic(topic);
    console.log(`Subscribed to topic: ${topic}`);
}

export async function unsubscribeFromTopic(topic) {
    await messaging().unsubscribeFromTopic(topic);
    console.log(`Unsubscribed from topic: ${topic}`);
}
