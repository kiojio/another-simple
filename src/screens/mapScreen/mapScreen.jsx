import React, {useEffect, useState} from 'react';
import { View } from 'react-native';

import Text from 'components/text';

import styles from './mapScreen.styles';

import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiZ29leHByZXNzMDEiLCJhIjoiY2p3ZXhuNXQxMHJyNjQ5bjJwaHVnZ2dqeSJ9.j-EQORtdosJB7K-VpO_Rhw");

function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0,
    longitudeDelta: 0.0,
  })
  const [marker, setMarker] = useState({
    title: '',
    description: '',
    coordinates: {
      latitude: 0.0,
      longitude: 0.0
    }
  })
  const [isLoading, setIsLoading] = useState(false)

  const onRegionDidChange = async (obj) => {
    console.log("MapBox", obj.geometry.coordinates);
    setMarker({
      coordinates: {
        latitude: obj.geometry.coordinates[1],
        longitude: obj.geometry.coordinates[0],
      }
    })
    setRegion:({
      latitude: obj.geometry.coordinates[1],
      longitude: obj.geometry.coordinates[0],
      latitudeDelta: 0,
      longitudeDelta: 0,
    })
  }

  const renderGeolocation = () => {
    BackgroundGeolocation.getCurrentLocation(
      (position) => {
        Hooks.consoleLog(TAG + " geo position: ", position);
        setRegion({
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        })
        setMarker({
          title: 'FINISH',
          description: 'You have found me!',
          coordinates: {
            latitude: position.latitude,
            longitude: position.longitude
          }
        })
        console.log("backGeo marker", marker);
      },
      (error) => {
        console.log("error get current position: ", error)
      },
      {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 1000
      }
    );
  }

  useEffect(() => {
    renderGeolocation()
  });


  return (
    <View style={styles.screen}>
      <MapboxGL.MapView
        style={styles.map}
        surfaceView={true}
        pitchEnabled={false}
        rotateEnabled={false}
        compassEnabled={false}
        onRegionDidChange={onRegionDidChange}
      >

      </MapboxGL.MapView>
    </View>
  );
}

export default MapScreen;
