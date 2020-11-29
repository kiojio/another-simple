import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from 'screens/splashScreen';
import HomeScreen from 'screens/homeScreen';
import ContactsScreen from 'screens/contactsScreen';
import ProfileScreen from 'screens/profileScreen';
import SignInScreen from 'screens/signInScreen';
import SignUpScreen from 'screens/signUpScreen';
import SearchScreen from 'screens/searchScreen';
import ScanScreen from '../screens/scanScreen/scanScreen';
import MenuScreen from '../screens/menuScreen/menuScreen';
import MapScreen from '../screens/mapScreen/mapScreen';

import TabIcon from 'components/tabIcon';

import { USER_AUTHENTICATED } from 'resources/user/user.constants';
import * as userSelectors from 'resources/user/user.selectors';

import { getItem } from 'helpers/storage';
import config from 'resources/config';

import images from 'themes/images';
import colors from 'themes/colors';

//IconTab
import home from '../Assets/svg/home';
import myOrder from '../Assets/svg/myOrder';
import myProfile from '../Assets/svg/myProfile';
import save from '../Assets/svg/save';
import inbox from '../Assets/svg/inbox';

const prefix = `${config.applicationId}://`;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
};

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Scanner" component={ScanScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

const tabs = [
  {
    id: 1,
    title: 'Awal',
    component: HomeStack,
    tabIcon: home,
    active: colors.mainTheme
  },
  {
    id: 2,
    title: 'Simpan',
    component: ContactsScreen,
    tabIcon: save,
    active: colors.mainTheme
  },
  {
    id: 3,
    title: 'Pesanan',
    component: ProfileScreen,
    tabIcon: myOrder,
    active: colors.mainTheme
  },
  {
    id: 3,
    title: 'Inbox',
    component: ProfileScreen,
    tabIcon: inbox,
    active: colors.mainTheme
  },
  {
    id: 3,
    title: 'Akun Saya',
    component: ProfileScreen,
    tabIcon: myProfile,
    active: colors.mainTheme
  },
];

const AppNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const userAuthenticated = useSelector(userSelectors.getUserAuthenticated);

  const getToken = useCallback(async () => {
    const token = await getItem('token');
    config.token = token;
    setIsLoading(false);
    if (token) {
      dispatch({ type: USER_AUTHENTICATED });
    }
  }, [dispatch]);

  const loading = useCallback(async () => {
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  })

  // useEffect(() => {
  //   getToken();
  // }, [getToken]);

  useEffect(() => {
    loading();
  });

  if (isLoading) {
    return (
      <SplashScreen />
    );
  }

  const OldStack =  () =>{
    return <NavigationContainer linking={{ prefixes: [prefix] }}>
    {userAuthenticated
      ? (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
          {tabs.map(tab => (
            <Tab.Screen
              name={tab.title}
              component={tab.component}
              options={{
                tabBarIcon: icon => (
                  <TabIcon source={icon.focused ? tab.activeTabIcon : tab.tabIcon} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      )
      : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )
    }
    </NavigationContainer>
  }

  return (
    <NavigationContainer linking={{ prefixes: [prefix] }}>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.id}
            name={tab.title}
            component={tab.component}
            options={{
              tabBarIcon: icon => (
                <TabIcon icon={tab.tabIcon}/>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default AppNavigation;
