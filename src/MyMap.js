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
import { MapView } from 'expo';

export default class MyMap extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 37.5665,
            longitude: 126.9780,
          }}
          title="Home"
          description="My home"
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
});
