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
import EachFeature from "./EachFeature";
import PropTypes from "prop-types";

class FeaturesList extends Component {
  static PropTypes = {
    features: PropTypes.array.isRequired,
    onFeaturePress: PropTypes.func.isRequired,
    handleEnd:PropTypes.func.isRequired
  };


  render() {

    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.props.features}
          keyExtractor={(x, i) => i}
          onEndReached={this.props.handleEnd}
          onEndReachedThreshold={0}
          ListFooterComponent={() => (
            <ActivityIndicator animating size="large" />
          )}
          renderItem={({ item }) => (
            <EachFeature
              featureItem={item}
              onPress={this.props.onFeaturePress}
              
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 140
  }
});

export default FeaturesList;
