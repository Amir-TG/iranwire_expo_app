import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import ajax from "../ajax";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";
import { DrawerNavigator } from "react-navigation";

export default class App extends React.Component {
  state = {
    headlines: [],
    currentNewsId: null
  };

  async componentDidMount() {
    const homePage = await ajax.fetchHomePage();
    this.setState({
      headlines: homePage.headlines
    });
  }

  setCurrentNewsId = newsId => {
    this.setState({
      currentNewsId: newsId
    });
  };
  unSetCurrentNewsId = () => {
    this.setState({
      currentNewsId: null
    });
  };

  currentNews = () => {
    return this.state.headlines.find(
      news => news.pk === this.state.currentNewsId
    );
  };

  render() {
    if (this.state.currentNewsId) {
      return (
        <NewsDetail
          newsItem={this.currentNews()}
          onBack={this.unSetCurrentNewsId}
        />
      );
    }
    if (this.state.headlines.length > 0) {
      return (
        <NewsList
          news={this.state.headlines}
          onItemPress={this.setCurrentNewsId}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>ایران‌وایر</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 40
  }
});
