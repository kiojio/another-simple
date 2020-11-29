import { StyleSheet,  Dimensions } from 'react-native';
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
  sliderWidth: width,
  itemWidth: width,
  sectionBanner:{
    marginTop: 30,
  },
  bannerCard:{
    width: width * 0.8,
    height: 200,
    borderRadius: 10
  },
  sectionCity:{
    marginTop: 20,
  },
  sectionTitleCity:{
    padding:10,
    fontSize: 25,
    fontWeight:"bold"
  },
  cityCard:{
    width: 200,
    height: 300,
    borderRadius: 10
  },
  textCity: {
    position: 'absolute',
    fontSize: 24,
    alignSelf: "center",
    textAlign: "center",
    padding: 20,
    color: colors.white,
    fontWeight: 'bold',
    bottom: 0
  },
});
