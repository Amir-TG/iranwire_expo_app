import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import FeaturesList from "./FeaturesList";
import FeatureDetail from "./FeatureDetail";
import { DrawerNavigator } from "react-navigation";

export default class Features extends React.Component {
  state = {
    currentNewsId: null,
    page: 1,
    featuresList: [],
    isLoding: false
  };

  componentDidMount() {
    this.fetchLoadFeatures();

  }

  fetchLoadFeatures = async () => {
    this.setState({ isLoading: true });
    const fetchfeatuers = await fetch(
      `https://iranwire.com/fa/api/v1/articles/features?page=${
        this.state.page
      }&page_size=22`
    );

    const json = await fetchfeatuers.json();
    this.setState(state => ({
      featuresList: [...state.featuresList, ...json.results],
      isLoading: false
    }));
  };

  handleEnd = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchLoadFeatures()
    );
  };

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
    return this.state.featuresList.find(
      news => news.pk === this.state.currentNewsId
    );
  };

  render() {
    if (this.state.currentNewsId) {
      return (
        <FeatureDetail
          featureItem={this.currentNews()}
          onBack={this.unSetCurrentNewsId}
        />
      );
    }
    if (this.state.featuresList.length > 0) {
      return (
        <FeaturesList
          features={this.state.featuresList}
          onFeaturePress={this.setCurrentNewsId}
          handleEnd={this.handleEnd}
        />
      );
    } else {
      return <Text style={[styles.title , {fontFamily:'IranSansB'}]}> گزارش‌ها </Text>;
    }
  }
}
const styles = StyleSheet.create({
    title:{
      fontSize: 40,
      alignSelf: 'center',
  
  
    }
  })
