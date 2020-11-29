import React from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Text from 'components/text';

import styles from './menuScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import HeaderCustom from 'components/HeaderCustom';
import arrowIcon from '../../Assets/svg/arrowIcon';

const {width, height} = Dimensions.get('window');

function MenuScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <LinearGradient
        style={{
          width: width,
          height: 50,
          overflow: "hidden"
        }}
        start={{x: 1.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        locations={[0,0.2,0.0]}
        colors={[colors.plane, colors.plane]}
      >
        <HeaderCustom
          transparent={true}
          leftIcon={arrowIcon}
          title="Akomodasi"
          onPressLeft={() => navigation.goBack()}
        />
      </LinearGradient>
      <ScrollView
        style={
          {flex:1}
        }
      >
        <LinearGradient
          style={{
            width: width,
            height: 80,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            overflow: "hidden"
          }}
          start={{x: 1.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          locations={[0,0.2,0.0]}
          colors={[colors.plane, colors.plane]}
        />
        <View
          style={{
            flex:1,
            backgroundColor: colors.white,
            borderRadius: 10,
            padding: 10,
            margin: 10,
            marginTop: 0,
            position: "relative",
            top: -50,
          }}
        > 
          <View
            style={{
              flex:1,
              flexDirection: "row",
              borderBottomWidth: 1,
              padding: 15
            }}
          >
            <Text>Hotel di sekitar anda</Text>
          </View>
          <View
            style={{
              flex:1,
              flexDirection: "row",
              padding: 15,
              justifyContent: "space-between",
              paddingHorizontal: 0
            }}
          >
            <View
              style={{borderBottomWidth:1}}
            >
              <Text>Min, 29 Nov 2020</Text>
            </View>
            <View
              style={{borderBottomWidth:1}}
            >
              <Text>1 Malam</Text>
            </View>
          </View>
          <View
            style={{
              flex:1,
              flexDirection: "row",
              borderBottomWidth: 1,
              padding: 15
            }}
          >
            <Text>1 Kamar, 1 Dewasa, 0 anak</Text>
          </View>
          <View
            style={{
              flex:1,
              flexDirection: "row",
              borderBottomWidth: 1,
              padding: 15
            }}
          >
            <Text>Filter</Text>
          </View>
          <View
            style={{
              flex:1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 15
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.gray,
                borderRadius: 5,
                width: 80,
                padding: 10,
                alignItems: "center"
              }}
              onPress={() => navigation.navigate('Map')}
            >
              <Text>Peta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.orange,
                borderRadius: 5,
                width: 240,
                padding: 10,
                alignItems: "center"
              }}
              onPress={() => navigation.navigate('Search')}
            >
              <Text>Cari</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MenuScreen;
