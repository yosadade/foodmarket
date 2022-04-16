/* eslint-disable no-console */
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
import NotificationHandler from '../../../NotificationHandler';
import {colors} from '../../utils';

export default class NotifService {
  constructor(onRegister, onNotification, profile) {
    this.lastId = 0;
    this.lastChannelCounter = 0;
    this.name = '';
    this.createDefaultChannels();
    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);
    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
    PushNotification.getChannels(function (channels) {
      console.log(channels);
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: '123-testing-channel-id',
        channelName: 'Default channel',
        channelDescription: 'A default channel',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) =>
        console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channe
    );
    PushNotification.createChannel(
      {
        channelId: 'sound-channel-id',
        channelName: 'Sound channel',
        channelDescription: 'A sound channel',
        soundName: 'sample.mp3',
        importance: 4,
        vibrate: true,
      },
      (created) =>
        console.log(`createChannel 'sound-channel-id' returned '${created}'`),
    );
  }
  createOrUpdateChannel() {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: 'custom-channel-id',
        channelName: `Custom channel - Counter: ${this.lastChannelCounter}`,
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`, // (optional) default: u
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`),
    );
  }
  popInitialNotification() {
    PushNotification.popInitialNotification((notification) =>
      console.log('InitialNotication:', notification),
    );
  }
  localNotif(soundName, profile) {
    this.lastId++;
    PushNotification.localNotification({
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'My big text that will be shown when notification is expanded',
      subText: `${moment(Date.now()).startOf('hour').fromNow()}`,
      color: colors.black,
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      ongoing: false,
      // actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true,
      when: null,
      usesChronometer: false,
      timeoutAfter: null,
      id: this.lastId,
      title: `Selamat datang ${profile}`,
      message: 'Diskon 20% untuk pengguna baru!',
      userInfo: {screen: 'home'},
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10,
      largeIconUrl: 'https://source.unsplash.com/random/1024x500',
      bigLargeIconUrl: 'https://source.unsplash.com/random/1024x500',
      bigPictureUrl: 'https://source.unsplash.com/random/1024x500',
    });
  }
  scheduleNotif(soundName) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(Date.now() + 30 * 1000),
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'My big text that will be shown when notification is expanded',
      subText: 'This is a subText',
      color: 'blue',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      ongoing: false,
      // actions: ['Yes', 'No'],
      invokeApp: false,
      when: null,
      usesChronometer: false,
      timeoutAfter: null,
      id: this.lastId,
      title: 'Scheduled Notification',
      message: 'My Notification Message',
      userInfo: {sceen: 'home'},
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10,
    });
  }
  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }
  requestPermissions() {
    return PushNotification.requestPermissions();
  }
  cancelNotif() {
    PushNotification.cancelLocalNotifications({id: '' + this.lastId});
  }
  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
  abandonPermissions() {
    PushNotification.abandonPermissions();
  }
  getScheduledLocalNotifications(callback) {
    PushNotification.getScheduledLocalNotifications(callback);
  }
  getDeliveredNotifications(callback) {
    PushNotification.getDeliveredNotifications(callback);
  }
}
