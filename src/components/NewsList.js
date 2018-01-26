import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import EachNews from './EachNews'

class NewsList extends Component {
  static PropTypes = {
    news: PropTypes.array.isRequired,
    onItemPress:PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.news}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
        <EachNews newsItem={item} onPress={this.props.onItemPress} /> }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingBottom: 200,



    }
})

export default NewsList;
