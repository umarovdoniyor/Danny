import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

export default class Data extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image
          blurRadius={1}
          style={styles.img}
          source={{uri: 'http://io.binus.ac.id/files/2014/07/sejong_univ.jpg'}}
        />
        <View style={styles.sub}>
            <Button title="Calculator" onPress={() => this.props.navigation.navigate('CalcScreen')} />
            <Button title="Database Manager" onPress={() => this.props.navigation.navigate('DataScreen')} />
            <Button title='Go back' onPress={() => this.props.navigation.goBack()} />
        </View>
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
  }
});
