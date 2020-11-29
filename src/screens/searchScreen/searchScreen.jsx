import React from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';

import styles from './searchScreen.styles';
import HeaderSearch from 'components/HeaderSearch';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../themes/colors';
import { color } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window')

const recommendation = [
  'tes covid', 'tiket pesawat bali',
  'promo flight', 'promo hotel', 'hotels di bali',
  'staycation', 'hotel detat saya', 'bandung'
]

function SearchScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <HeaderSearch
        canGoBack={true}
        goBack={() => navigation.goBack()}
      />    
      <ScrollView>
        <View 
          style={{
            backgroundColor: colors.white,
            width: width
          }}
        >
          <Text>
            Saran Pencarian
          </Text>
          <FlatList
            numColumns={3}
            data={recommendation}
            renderItem={({item}) => {
              return(
                <View
                  style={{
                    backgroundColor: colors.gray,
                    borderRadius: 8,
                    padding: 10,
                    margin:3
                  }}
                >
                  <Text
                    style={{color: colors.black}}
                  >
                    {item}
                  </Text>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
