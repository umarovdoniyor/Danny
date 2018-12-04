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
import * as firebase from 'firebase'
import { observer } from 'mobx-react';
import User from '../User'

export default observer(class Login extends React.Component {
  state = {
    save: false,
    email: '',
    password: '',
  }

  login = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(res => {
      if(res.user) {
        User.loggedIn = true
      }else {
        alert('Cannot login the user')
      }
    })
    .catch(error => {
      alert('Cannot login the user')
    });
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
            onChangeText={email => this.setState({email})}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({password})}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10, color: 'white'}}>Save me</Text>
            <Switch
              value={this.state.save}
              onValueChange={() => this.setState({save: !this.state.save})}
            />
          </View>
          
          <TouchableOpacity
              style={styles.btn}
              onPress={this.login}
          >
            <Text style={styles.btnText}>Login</Text>
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
