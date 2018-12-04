import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Button
} from 'react-native';

export default class Login extends React.Component {

    state = {
        number: '',
        info: '',
        result: {}
    }
        
    calc = () => {
        const { number } = this.state
        if(number === '') Alert.alert('Enter a number into the field')
        // else if(parseInt(number)) Alert.alert('Numbers only')
        else {
            let i = 2, num = parseInt(number)
            while(i <= num/2) {
                if(num % i !== 0) i++
                else {
                    this.setState({
                        result: {backgroundColor: 'rgba(255,0,0,0.5)'},
                        info: 'Not a prime number'
                    })
                    break
                }
            }
            if(i === Math.ceil(num/2)) this.setState({
                result: {backgroundColor: 'rgba(0,255,0,0.5)'},
                info: 'Prime number'
            })
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
        <KeyboardAvoidingView behavior='padding' style={styles.sub}>
            <Image style={styles.logo} source={{uri: 'https://www.verdadesign.com/assets/thumbnails/image/winnipeg-logo-design.png'}} />
            <Text style={styles.info}>{this.state.info}</Text>
            <TextInput
                style={[styles.input, this.state.result]}
                placeholder="Check prime number"
                placeholderTextColor="#fff"
                value={this.state.number}
                keyboardType='numeric'
                onChangeText={number => this.setState({number})}
                returnKeyType='done'
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={this.calc}
            >
                <Text style={styles.btnText}>Is prime?</Text>
            </TouchableOpacity>
            <Button title='Go back' onPress={() => this.props.navigation.goBack()} />
        </KeyboardAvoidingView>
        </View>
    );
    }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%'
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
    padding: 15,
    color: 'black',
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.5)'
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
  info: {
      fontSize: 18,
      color: 'white',
      fontWeight: '900'
  }
});
