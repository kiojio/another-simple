import React from 'react';
import { 
  View, 
  TouchableOpacity,
  Touchable,
  Text,
  Dimensions
} from 'react-native';
import {SvgCss} from 'react-native-svg';
import logo from '../../Assets/svg/logo';
import arrowIcon from '../../Assets/svg/arrowIcon';
import InputIcon from '../../components/InputIcon';

const {width, height} = Dimensions.get('window');
 
const HeaderPage = ({
  goBack,
  canGoBack,
  onSearch,
  search
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
            style={{justifyContent: 'center', zIndex:1}}
          >
          {
            canGoBack ? 
            <TouchableOpacity
              onPress={goBack}
            >
              <SvgCss xml={arrowIcon} width={30} height={30} />
            </TouchableOpacity>
            :
            <SvgCss xml={logo} width={30} height={30} />
          }
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <InputIcon
              leftIcon="search"
              onChange={onSearch}
              value={search}
              placeholder="Cari tiket pesawat jogja"
            />
          </View>
      </View>
  );
};

export default HeaderPage;