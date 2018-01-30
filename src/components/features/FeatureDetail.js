import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  PanResponder,
  Animated
} from "react-native";
import { Card, ListItem, Button, Icon, Header } from "react-native-elements";
import PropTypes from "prop-types";
import striptags from "striptags";
import ajax from '../../ajax'

class FeaturDetail extends Component {
  imageXPos = new Animated.Value(0);
  imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (ev, gs) => {
      this.imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (ev, gs) => {
      this.width = Dimensions.get("window").width;
      const direction = Math.sign(gs.dx);
      if (Math.abs(gs.dx) > this.width * 0.4) {
        Animated.timing(this.imageXPos, {
          toValue: direction * this.width,
          duration: 250
        }).start(() => this.handleSwipe(-1 * direction));
      } else {
        Animated.timing(this.imageXPos, {
          toValue: 0,
          duration: 150
        }).start();
      }
    }
  });
  handleSwipe = indexDirection => {
    if (!this.state.slides[this.state.indexImage + indexDirection]) {
      Animated.timing(this.imageXPos, {
        toValue: 0,
        duration: 150
      }).start();
      return;
    }
    this.setState(
      prevState => ({
        indexImage: prevState.indexImage + indexDirection
      }),
      () => {
        this.imageXPos.setValue(indexDirection * this.width);
        Animated.spring(this.imageXPos, {
          toValue: 0
        }).start();
      }
    );
  };

  static PropTypes = {
    featureItem: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
  };

  state = {
    newsbody: [],
    author: {},
    slides: [],
    indexImage: 0,
    fontLoaded: false
  };

  async componentDidMount() {
    const news = await ajax.fetchfeaturesDetails(this.props.featureItem.pk);

    if (news.single.slides.length > 0) {
      this.setState({
        slides: news.single.slides
      });
    }
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
        <View style={{alignItems:'flex-end'}}>
          <Text style={styles.menu} onPress={this.props.onBack}>
            برگشت
          </Text>
        </View>
        <ScrollView style={styles.container}>
          <View>
            <Text style={[styles.title, { fontFamily: "IranSansB" }]}>
              {this.props.featureItem.title}
            </Text>
            <Animated.View
              {...this.imagePanResponder.panHandlers}
              style={{ left: this.imageXPos }}
            >
              {this.state.slides.length === 0 ? (
                <Image
                  source={{
                    uri: "https://iranwire.com/" + this.state.newsbody.image
                  }}
                  style={styles.image}
                />
              ) : (
                <View>
                  <Image
                    source={{
                      uri:
                        "https://iranwire.com/" +
                        this.state.slides[this.state.indexImage].image
                    }}
                    
                    style={styles.image}
                  />
                  
                  <Text style={styles.sub}>
                    {this.state.slides[this.state.indexImage].image_title}
                  </Text>
                </View>
              )}
            </Animated.View>
          </View>
          <View>
            {this.state.author ? (
              <Text style={[styles.author, { fontFamily: "IranSansR" }]}>
                {this.state.author.name}
              </Text>
            ) : (
              <Text style={[styles.author, { fontFamily: "IranSansR" }]}>
                ایران‌وایر
              </Text>
            )}
          </View>
          <View>
            <Text style={[styles.body, { fontFamily: "IranSansR" }]}>
              {cleanBody3}
            </Text>
          </View>
          <View />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1.77,
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
    padding: 5
  },
  author: {
    color: "#76a56f",
    padding: 20,
    textAlign: "right"
  },
  container: {
    paddingTop: 10,
    marginBottom: 100
  },
  body: {
    textAlign: "right",
    paddingHorizontal: 20,
    paddingBottom: 100,
    lineHeight: 20
  },
  header: {
    backgroundColor: "#76a56f"
  },
  menu: {
    marginTop: -30,
    marginRight: 10,
  },
  sub: {
    padding: 10,
    marginTop: -5,
    width: "100%",
    backgroundColor: "#76a56f",
    textAlign: "center",
    fontSize: 12,
    color: "#fff"
  }
});

export default FeaturDetail;
