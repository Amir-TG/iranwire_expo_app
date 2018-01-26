import { DrawerNavigator } from "react-navigation";
import Home from "./Home";
import FeaturesList from "./features/FeaturesList";
import { Icon, Button, Header } from "react-native-elements";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Home />
  </View>
);

const FeaturesScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <FeaturesList />
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name="home"
          type="Entypo"
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Features: {
    screen: FeaturesScreen,
    navigationOptions: {
      drawerLabel: "Features",
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name="folder"
          type="Entypo"
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  }
});
const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#eee",
    height: 70,
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingTop: 40,
  }
});
export default RootDrawer;
