import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import BlogsList from "./BlogsList";
import BlogDetail from "./BlogDetail";
import { DrawerNavigator } from "react-navigation";

export default class Blogs extends React.Component {
  state = {
    currentNewsId: null,
    page: 1,
    blogsList: [],
    isLoding: false
  };

  componentDidMount() {
    this.fetchLoadBlogs();

  }

  fetchLoadBlogs = async () => {
    this.setState({ isLoading: true });
    const fetchBlogs = await fetch(
      `https://iranwire.com/fa/api/v1/articles/blogs?page=${
        this.state.page
      }&page_size=22`
    );

    const json = await fetchBlogs.json();
    this.setState(state => ({
      blogsList: [...state.blogsList, ...json.results],
      isLoading: false
    }));
  };

  handleEnd = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchLoadBlogs()
    );
  };

  setCurrentNewsId = newsId => {
    this.setState({
      currentNewsId: newsId
    });
  };
  unSetCurrentNewsId = () => {
    this.setState({
      currentNewsId: null
    });
  };

  currentNews = () => {
    return this.state.blogsList.find(
      news => news.pk === this.state.currentNewsId
    );
  };

  render() {
    if (this.state.currentNewsId) {
      return (
        <BlogDetail
          blogsItem={this.currentNews()}
          onBack={this.unSetCurrentNewsId}
        />
      );
    }
    if (this.state.blogsList.length > 0) {
      return (
        <BlogsList
          blogs={this.state.blogsList}
          onBlogPress={this.setCurrentNewsId}
          handleEnd={this.handleEnd}
        />
      );
    } else {
      return <Text style={[styles.title , {fontFamily:'IranSansB'}]}> بلاگ‌ها </Text>;
    }
  }
}


const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    alignSelf: 'center',


  }
})