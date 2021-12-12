import { registerRootComponent } from 'expo';
import {AppRegistry, Platform, StatusBar} from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import Headlines from './Headlines';
import NewsWebView from './NewsWebView';
import LoginScreen from './LoginScreen';
import {name as appName} from './app.json';

const navigationConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Haber Kategorileri',
    headerStyle: {
      backgroundColor: '#2196F3',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    },
  },
}
 
StatusBar.setBarStyle('light-content', true);
 
const MainNavigator = createStackNavigator({
    Home: { screen: LoginScreen },
    App: {screen: App},
    Headlines: { screen: Headlines },
    NewsWebView: { screen: NewsWebView },
  },navigationConfig);

  const MainContainer = createAppContainer(MainNavigator);

registerRootComponent(MainContainer);