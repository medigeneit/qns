/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

'use strict';

import LoginManager from './LoginManager';

//import firebase from 'react-native-firebase';
//import { Notification } from 'react-native-firebase';

class PushManager {
    pushToken = null;

    constructor() { }

    init() {
        try {
            //////////// rytry
        } catch (e) {
           // console.warn('React Native Firebase is not set up. Enable google-services plugin at the bottom of the build.gradle file');
        }

    }

    getPushToken() {
        return this.pushToken;
    }
/**** *
    showLocalNotification(from) {
        console.log('PushManager: showLocalNotification');
        try {
            const notification = new firebase.notifications.Notification()
                .setNotificationId('notificationId')
                .setTitle('Incoming call');
            notification.android.setSmallIcon('ic_vox_notification');
            notification
                .android.setChannelId('voximplant_channel_id');
            firebase.notifications().displayNotification(notification);
        } catch (e) {
            console.warn('React Native Firebase is not set up. Enable google-services plugin at the bottom of the build.gradle file');
        }

    }

    removeDeliveredNotification() {
        try {
            firebase.notifications().removeAllDeliveredNotifications();
        } catch (e) {
            console.warn('React Native Firebase is not set up. Enable google-services plugin at the bottom of the build.gradle file');
        }
    }  ***/
}

const pushManager = new PushManager();
export default pushManager;
