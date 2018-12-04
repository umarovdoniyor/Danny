import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Text,
  Switch
} from 'react-native';
import User from '../User'
import { observer } from 'mobx-react';
import * as firebase from 'firebase'

export default observer(class Register extends React.Component {
    state = {
      save: false,
      email: '',
      password: '',
      passwordMatch: '',
    }
  
    register = () => {
      if(this.state.password !== this.state.passwordMatch) {
          alert('Passwords do not match')
      }else {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(res => {
          if(res.user) {
              User.loggedIn = true
          }else {
              alert('Cannot register the user')
          }
          })
          .catch(error => {
          alert('Cannot register the user')
          });
      }
    }
  
  
    render() {
      return (
        <View style={styles.cont}>
          <Image
            blurRadius={1}
            style={styles.img}
            source={{uri: 'http://io.binus.ac.id/files/2014/07/sejong_univ.jpg'}}
          />
          <View style={styles.sub}>
            <Image style={styles.logo} source={{uri: 'https://www.verdadesign.com/assets/thumbnails/image/winnipeg-logo-design.png'}} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#fff"
              value={this.state.email}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fff"
              value={this.state.password}
              secureTextEntry
              onChangeText={password => this.setState({password})}
            />
            <TextInput
              style={styles.input}
              placeholder="Re-type Password"
              placeholderTextColor="#fff"
              value={this.state.passwordMatch}
              secureTextEntry
              onChangeText={passwordMatch => this.setState({passwordMatch})}
            />
            
            <TouchableOpacity
                style={styles.btn}
                onPress={this.register}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  })

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  sub: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 15,
    color: 'black',
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 10
  },
  btn: {
    width: '70%',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 30
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
});
