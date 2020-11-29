import React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import {SvgCss} from 'react-native-svg';

import Text from 'components/text';
import HeaderCustom from 'components/HeaderCustom';

import styles from './scanScreen.styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import colors from '../../themes/colors';

import arrowIcon from '../../Assets/svg/arrowIcon';

function ScanScreen({navigation}) {
  const onSuccess = () => {
    Alert("Success scan")
  }

  return (
    <View style={styles.screen}>
      <HeaderCustom
        onPressLeft={() => navigation.goBack()}
        leftIcon={arrowIcon}
        title="Scanner"
      />
      <QRCodeScanner
        onRead={onSuccess}
        bottomContent={
          <Text style={styles.buttonText}>Arahkan Kamera pada kode QR untuk memindai</Text>
        }
      />
    </View>
  );
}

export default ScanScreen;
