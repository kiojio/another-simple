import React from 'react';
import { 
  View, 
  TouchableOpacity,
  Touchable,
  Text,
  Dimensions
} from 'react-native';
import {SvgCss} from 'react-native-svg';
import searchIcon from '../../Assets/svg/searchIcon';
import logo from '../../Assets/svg/logo';
import threedot from '../../Assets/svg/threedot';
import arrowIcon from '../../Assets/svg/arrowIcon';
import colors from '../../themes/colors';

const {width, height} = Dimensions.get('window');
 
const HeaderPage = ({
  onPressSearch,
  onPressSetting,
  goBack,
  canGoBack
}) => {
  return (
    <View
        transparent
        style={{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'center',
          minHeight: 50,
          maxHeight: 55,
          padding: 5,
          backgroundColor: '#1ba0e2',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
          borderBottomWidth: 1,
          borderBottomColor: '#E2E2E2'
        }} 
      >
          <View
            style={{justifyContent: 'center', padding: 5, zIndex:1}}
          >
          {
            canGoBack ? 
            <View
              style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                paddingRight: 25
              }}
            >
              <TouchableOpacity
                onPress={goBack}
              >
                <SvgCss xml={arrowIcon} width={30} height={30} />
              </TouchableOpacity>
            </View>
            :
            <SvgCss xml={logo} width={30} height={30} />
          }
          </View>
          <TouchableOpacity
            onPress={onPressSearch}
            activeOpacity={1}
            style={{
              width: width * 0.8,
              flexDirection: 'row',
              borderRadius: 5,
              backgroundColor: colors.white,
              alignItems: "center",
              marginRight: 10
            }}
          >
            <SvgCss xml={searchIcon} width={30} height={30} />
            <Text>Car "tiket pesawat jogja"</Text>
          </TouchableOpacity>
          <View
            style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          > 
            <TouchableOpacity
              onPress={onPressSetting}
            >
              <SvgCss xml={threedot} width={40} height={40} />
            </TouchableOpacity>
          </View>
      </View>
  );
};

export default HeaderPage;