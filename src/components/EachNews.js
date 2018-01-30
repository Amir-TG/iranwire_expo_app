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
          title={this.props.newsItem.category} titleStyle={{fontFamily:'IranSansB'}}
          image={{ uri: "https://iranwire.com/" + this.props.newsItem.image }}
          containerStyle={styles.shadow}
        >
          <Text style={{ marginBottom: 10 , textAlign:"center", fontSize:20 , fontFamily:'IranSansB'}}>
            {this.props.newsItem.title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#76a56f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  }
})
export default EachNews;
