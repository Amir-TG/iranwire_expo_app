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
import EachBlog from "./EachBlog";
import PropTypes from "prop-types";

class FeaturesList extends Component {
  static PropTypes = {
    blogs: PropTypes.array.isRequired,
    onBlogPress: PropTypes.func.isRequired,
    handleEnd:PropTypes.func.isRequired
  };
 

  render() {
    console.log(this.props.featuresList)
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.props.blogs}
          keyExtractor={(x, i) => i}
          onEndReached={this.props.handleEnd}
          onEndReachedThreshold={0}
          ListFooterComponent={() => (
            <ActivityIndicator animating size="large" />
          )}
          renderItem={({ item }) => (
            <EachBlog
              blogItem={item}
              onPress={this.props.onBlogPress}
              
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
