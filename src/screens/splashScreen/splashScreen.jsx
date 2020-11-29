import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import {SvgCss} from 'react-native-svg';
import logo from '../../Assets/svg/logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.plane
  },
});

function SplashScreen() {
  return (
    <View style={styles.container}>
      <SvgCss
        width={200}
        height={200}
        xml={logo}
      />
      <ActivityIndicator />
    </View>
  );
}

export default SplashScreen;
