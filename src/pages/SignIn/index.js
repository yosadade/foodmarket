import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onHandleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find you best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          secureTextEntry
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={24} />
        <Button title="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          bgColor={colors.grey}
          color={colors.white}
          onPress={onHandleSignUp}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});

// import React, {useState} from 'react';
// import {
//   TextInput,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {NotifService} from '../../utils';

// const SignIn = () => {
//   const [registerToken, setRegisterToken] = useState('');
//   const [fcmRegistered, setFcmRegistered] = useState(false);
//   const onRegister = (token) => {
//     setRegisterToken(token.token);
//     setFcmRegistered(true);
//   };
//   const onNotif = (notif) => {
//     Alert.alert(notif.title, notif.message);
//   };
//   const notif = new NotifService(onRegister, onNotif);
//   const handlePerm = (perms) => {
//     Alert.alert('Permissions', JSON.stringify(perms));
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         Example app react-native-push-notification
//       </Text>
//       <View style={styles.spacer}></View>
//       <TextInput
//         style={styles.textField}
//         value={registerToken}
//         placeholder="Register token"
//       />
//       <View style={styles.spacer}></View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.localNotif();
//         }}>
//         <Text>Local Notification (now)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.localNotif('sample.mp3', 'yosada');
//         }}>
//         <Text>Local Notification with sound (now)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.scheduleNotif();
//         }}>
//         <Text>Schedule Notification in 30s</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.scheduleNotif('sample.mp3');
//         }}>
//         <Text>Schedule Notification with sound in 30s</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.cancelNotif();
//         }}>
//         <Text>Cancel last notification (if any)</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.cancelAll();
//         }}>
//         <Text>Cancel all notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.checkPermission(handlePerm());
//         }}>
//         <Text>Check Permission</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.requestPermissions();
//         }}>
//         <Text>Request Permissions</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.abandonPermissions();
//         }}>
//         <Text>Abandon Permissions</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.getScheduledLocalNotifications((notifs) => console.log(notifs));
//         }}>
//         <Text>Console.Log Scheduled Local Notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.getDeliveredNotifications((notifs) => console.log(notifs));
//         }}>
//         <Text>Console.Log Delivered Notifications</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.createOrUpdateChannel();
//         }}>
//         <Text>Create or update a channel</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           notif.popInitialNotification();
//         }}>
//         <Text>popInitialNotification</Text>
//       </TouchableOpacity>
//       <View style={styles.spacer}></View>
//       {fcmRegistered && <Text>FCM Configured !</Text>}
//       <View style={styles.spacer}></View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: '#000000',
//     margin: 5,
//     padding: 5,
//     width: '70%',
//     backgroundColor: '#DDDDDD',
//     borderRadius: 5,
//   },
//   textField: {
//     borderWidth: 1,
//     borderColor: '#AAAAAA',
//     margin: 5,
//     padding: 5,
//     width: '70%',
//   },
//   spacer: {
//     height: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });
// export default SignIn;
