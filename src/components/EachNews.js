import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import PropTypes from "prop-types";

class EachNews extends Component {
  static PropTypes = {
    newsItem: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  };

  handlePress = () => {
    this.props.onPress(this.props.newsItem.pk)
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Card
          title={this.props.newsItem.category}
          image={{ uri: "https://iranwire.com/" + this.props.newsItem.image }}
        >
          <Text style={{ marginBottom: 10 , textAlign:"center", fontSize:20}}>
            {this.props.newsItem.title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}


export default EachNews;
