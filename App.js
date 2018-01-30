import React from "react";
import Home from "./src/components/Home"
import RootDrawer from './src/components/RootDrawer'
import { DrawerNavigator } from 'react-navigation';
import { View } from 'react-native'
import {Header , Icon} from 'react-native-elements'
import { Font } from 'expo'




export default class App extends React.Component {
  state={
    fontLoaded:false,
  }

  async componentDidMount() {
    Font.loadAsync({
      'IranSansR': require('./assets/fonts/IRANSansMobile.ttf'),
      'IranSansB': require('./assets/fonts/IRANSansMobile.ttf')
    });
    this.setState({fontLoaded:true})
  }

  render() {
    return(

      <RootDrawer />


    )
  }
}


