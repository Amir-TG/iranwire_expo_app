import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon, Header } from "react-native-elements";
import PropTypes from "prop-types";
import EachNews from "./EachNews";
import ajax from "../ajax";
import striptags from "striptags";

class NewsDetail extends Component {
  static PropTypes = {
    newsItem: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
  };

  state = {
    newsbody: [],
    author: {}
  };

  async componentDidMount() {
    const news = await ajax.fetchNewsDetails(this.props.newsItem.pk);
    this.setState({
      newsbody: news.single,
      author: news.single.author
    });
  }

  render() {
    var body;
    var cleanBody;
    body = this.state.newsbody.body;
    cleanBody = striptags(body);
    cleanBody3 = cleanBody
      .replace(/\w/gim, "‌")
      .replace(/&/gim, "‌")
      .replace(/;/gim, "‌");

    return (
      <View>
        <View  >
        <Text style={styles.menu} onPress={this.props.onBack}>برگشت</Text>
        </View>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.title}>{this.props.newsItem.title}</Text>
            <Image
              source={{
                uri: "https://iranwire.com/" + this.props.newsItem.image
              }}
              style={styles.image}
            />
          </View>
          <View>
            {this.state.author ? (
              <Text style={styles.author}>{this.state.author.name}</Text>
            ) : (
              <Text style={styles.author}>ایران‌وایر</Text>
            )}
          </View>
          <View>
            <Text style={styles.body}>{cleanBody3}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 580,
    height: 300
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
    padding:5
  },
  author: {
    color: "#76a56f",
    padding: 20,
    textAlign: "right"
  },
  container: {
    paddingTop: 10,
    marginBottom:100
  },
  body: {
    textAlign: "right",
    padding: 20,
    paddingBottom:100,
    
  },
  header: {
    backgroundColor: "#76a56f"
  },
  menu: {
    width:50,
    marginTop:-30 ,
    marginLeft: 195,

  }
});

export default NewsDetail;
