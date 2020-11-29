import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'themes/fonts';
import colors from '../../themes/colors';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...fonts.style.title,
  },
  sectionMenu:{
    flex: 1,
    backgroundColor: colors.graywhite,
    width: width,
    paddingLeft: 5,
    paddingBottom:5
  },  
  menu: {
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 5,
    margin: 15,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 10, 
    textAlign: "center",
    alignSelf: "center",
    width: 60
  },
  sectionInfo:{
    flex:1,
    flexDirection: "row"
  },
  infoName:{
    flex:1,
    flexDirection: "row",
    padding: 10
  },
  nameText:{
    fontWeight: "bold", 
    padding: 5
  },
  infoNameContent:{
    width: 30,
    borderRadius: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.graywhite,
    marginRight: 30
  },
  
});
