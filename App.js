import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'
import Login from './src/Login'
import Data from './src/Data'
import Video from './src/Video'
import Calc from './src/Calc'
import Menu from './src/Menu'
import MyMap from './src/MyMap'
import Chat from './src/Chat'
import Register from './src/Register'
import { createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import User from './User';
import { observer } from 'mobx-react'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAMWGFoqQ10b-l3bsI9crTZwBAAiPkYpbE",
  authDomain: "danny-59eaa.firebaseapp.com",
  databaseURL: "https://danny-59eaa.firebaseio.com",
  projectId: "danny-59eaa",
  storageBucket: "danny-59eaa.appspot.com",
  messagingSenderId: "701011746284"
};

const Tab = createMaterialTopTabNavigator(
  {Login, Register},
  {
    tabBarOptions: {
      style: {
        paddingTop: 40
      }
    }
  }
)

// const Auth = createStackNavigator(
//   {Tab},
//   {headerMode: 'none'}
// )

// const Root = createStackNavigator(
//   {
//     Drawer
//   },
//   {
//     // initialRouteName: 'CalcScreen',
//     // navigationOptions: {
//     //   header: null,
//     //   headerStyle: {
//     //     borderStartColor: 'rgba(0,0,0,0.5)'
//     //   }
//     // }
//   }
// )

const Drawer = createDrawerNavigator(
  {Video, Calc, Menu, MyMap, Chat}
)

export default observer(class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }
  render() {
    return User.loggedIn ? <Drawer /> : <Tab />
  }
})

const styles = StyleSheet.create({
})
