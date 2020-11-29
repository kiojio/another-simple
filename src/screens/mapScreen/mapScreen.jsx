import React, {useEffect, useState} from 'react';
import { View, ScrollView} from 'react-native';

import Text from 'components/text';
import HeaderCustom from 'components/HeaderCustom';

import styles from './mapScreen.styles';

import Geolocation from '@react-native-community/geolocation';
import MapboxGL from "@react-native-mapbox-gl/maps";
import arrowIcon from '../../Assets/svg/arrowIcon';

MapboxGL.setAccessToken("pk.eyJ1IjoiZ29leHByZXNzMDEiLCJhIjoiY2p3ZXhuNXQxMHJyNjQ5bjJwaHVnZ2dqeSJ9.j-EQORtdosJB7K-VpO_Rhw");

function MapScreen({navigation}) {
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
      latitude: -6.3454386,
      longitude: 106.7295982
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
    setRegion({
      latitude: obj.geometry.coordinates[1],
      longitude: obj.geometry.coordinates[0],
      latitudeDelta: 0,
      longitudeDelta: 0,
    })
  }

  const renderGeolocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(" geo position: ", position);
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        })
        setMarker({
          title: 'FINISH',
          description: 'You have found me!',
          coordinates: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
        console.log("backGeo marker", {marker, region});
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
      <HeaderCustom
        transparent={true}
        leftIcon={arrowIcon}
        title="Map"
        onPressLeft={() => navigation.goBack()}
      />
        <MapboxGL.MapView
          style={styles.map}
          surfaceView={true}
          pitchEnabled={false}
          rotateEnabled={false}
          compassEnabled={true}
          showUserLocation={true}
          zoomLevel={10}	
          centerCoordinate={[region.longitude, region.latitude]}
          onRegionDidChange={onRegionDidChange}
        >
          

        </MapboxGL.MapView>
    </View>
  );
}

export default MapScreen;
