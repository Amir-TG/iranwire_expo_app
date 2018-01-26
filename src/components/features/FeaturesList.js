import React, { Component } from "react";
import {
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated
} from "react-native";
import { Card } from "react-native-elements";
import EachNews from '../EachNews';
import PropTypes from "prop-types";

class FeaturesList extends Component {
  state = {
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
      isLoading:false
    }));
  };

  handleEnd = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchLoadFeatures()
    );
  };

  render() {
    console.log(this.state.page);
    return (
      <View>
        <FlatList style={styles.container}
          data={this.state.featuresList}
          keyExtractor={(x, i) => i}
          onEndReached={this.handleEnd}
          onEndReachedThreshold={0}
          ListFooterComponent={() => <ActivityIndicator animating size='large'/> }
          renderItem={({ item }) => (
            <EachNews newsItem={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
marginBottom: 200,



  }
})

export default FeaturesList;
