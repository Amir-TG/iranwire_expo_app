import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import PropTypes from "prop-types";

class EachBlog extends Component {
    static PropTypes = {
        blogItem: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
      };

  handlePress = () => {
    this.props.onPress(this.props.blogItem.pk)
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Card
          title={this.props.blogItem.category} titleStyle={{fontFamily:'IranSansB'}}
          image={{ uri: "https://iranwire.com/" + this.props.blogItem.image }}
        >
          <Text style={{ marginBottom: 10 , textAlign:"center", fontSize:20 , fontFamily:'IranSansB'}}>
            {this.props.blogItem.title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
}


export default EachBlog;
