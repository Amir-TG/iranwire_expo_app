import React from "react";
import Home from "./src/components/Home"
import RootDrawer from './src/components/RootDrawer'
import { DrawerNavigator } from 'react-navigation';
import { View } from 'react-native'
import {Header , Icon} from 'react-native-elements'




export default class App extends React.Component {


  render() {
    return(

      <RootDrawer />


    )
  }
}


