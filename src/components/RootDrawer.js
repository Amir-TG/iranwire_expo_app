import { DrawerNavigator } from "react-navigation";
import Home from "./Home";
import Features from "./features/Features";
import Blogs from './blogs/Blogs';
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
    <Features/>
  </View>
);
const BlogsScreen = ({ navigation }) => (
  <View>
    <View style={styles.menu}>
      <Icon
        name="menu"
        type="Entypo"
        size={26}
        onPress={() => navigation.navigate("DrawerToggle")}
      />
    </View>
    <Blogs/>
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "خانه",
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
      drawerLabel: "گزارش‌ها",
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name="folder"
          type="Entypo"
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Blogs: {
    screen: BlogsScreen,
    navigationOptions: {
      drawerLabel: "بلاگ‌ها",
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
