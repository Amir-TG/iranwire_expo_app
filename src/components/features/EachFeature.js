import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import PropTypes from "prop-types";

class EachFeature extends Component {
    static PropTypes = {
        featureItem: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
      };

  handlePress = () => {
    this.props.onPress(this.props.featureItem.pk)
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Card
          title={this.props.featureItem.category} titleStyle={{fontFamily:'IranSansB'}}
          image={{ uri: "https://iranwire.com/" + this.props.featureItem.image }}
        >
          <Text style={{ marginBottom: 10 , textAlign:"center", fontSize:20 , fontFamily:'IranSansB'}}>
            {this.props.featureItem.title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}


export default EachFeature;
