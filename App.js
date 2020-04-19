import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD43QSYgX1jA4VzHUqW9nwiSwdZ40bN_Ko",
  authDomain: "xent-b78c9.firebaseapp.com",
  databaseURL: "https://xent-b78c9.firebaseio.com",
  projectId: "xent-b78c9",
  storageBucket: "xent-b78c9.appspot.com",
  messagingSenderId: "1085247969861",
  appId: "1:1085247969861:web:29bf0bf227ef096974612c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
