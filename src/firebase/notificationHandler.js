// src/firebase/notificationHandler.js
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export async function onNotificationReceived(message) {
    // Display notification
    const channelId = await notifee.createChannel({
        id: 'NormalNotification1',
        name: 'NormalNotification1',
        sound: 'sound_1',  // Ensure this sound file exists
        importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
        title: message.notification?.title || 'New Notification',
        body: message.notification?.body || 'You have a new message.',
        android: {
            channelId,
            smallIcon: 'notification_icon', // Ensure this icon exists in your Android resources
            sound: 'sound_1',
            pressAction: {
                id: 'default',
            },
        },
        ios: {
            sound: 'sound_1',
        },
    });
}

export function setupNotificationListeners() {
    // Foreground notifications
    messaging().onMessage(async (remoteMessage) => {
        console.log('Foreground notification:', remoteMessage);
        await onNotificationReceived(remoteMessage);
    });

    // Background and Killed state notifications
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Background/Killed state notification:', remoteMessage);
        await onNotificationReceived(remoteMessage);
    });
}
