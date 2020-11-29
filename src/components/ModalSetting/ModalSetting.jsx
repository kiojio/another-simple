import React from 'react';
import {StyleSheet, Modal, Dimensions} from 'react-native';
import HeaderCustom from 'components/HeaderCustom';
import { 
  View, 
  Text,
} from 'react-native';
import colors from '../../themes/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalSetting:{
    flex:1,
    width: width,
    borderWidth: 0,
  },
  modalHeader:{
    backgroundColor: colors.white
  },
  itemText:{
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.plane
  },
  text:{
    padding: 10,
    color:colors.white
  }
})
 
const ModalSetting = ({
  visible,
  setVisible
}) => {
  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalSetting}>
        <View
          style={styles.modalHeader}
        >
          <HeaderCustom
            leftText="v1.0.0"
            rightText="TUTUP"
            onPressRight={setVisible}
          />
        </View>
        <View
          style={styles.itemText}
        >
          <Text style={styles.text}>BERLANGGANAN NEWSLETTER</Text>
          <Text style={styles.text}>BANTUAN</Text>
          <Text style={styles.text}>PENGATURAN</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSetting;