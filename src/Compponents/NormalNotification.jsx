import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notifee, { AndroidImportance } from '@notifee/react-native';

const NormalNotification = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'NormalNotification2',
            name: 'NormalNotification2',
            sound: 'sound_2',
            importance: AndroidImportance.HIGH
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
                smallIcon: 'notification_icon',
                sound: 'sound_2',
                pressAction: {
                    id: 'default',
                },
            },
            ios: {
                sound: 'sound_2',
                categoryId: 'default',
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Button
                    title='Display Notification'
                    onPress={() => onDisplayNotification()}
                />
            </View>
        </View>
    )
}

export default NormalNotification

const styles = StyleSheet.create({})