import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class ContentContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Text style={styles.heading}>React Native for React Developers</Text>

      <Text>React Native is becoming the definitive
      solution to create apps across multiple platforms.
       What React Native offers, is the possibility to
        create native mobile apps using only Javascript .
        In this post, I am going to make a comparison
        between React and React Native, and what are the
        first things a React Developer should know before
        starting to code.{"\n\n"}
       </Text>
      </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
  padding:8,
  },
  heading:{
  fontSize:18,
  fontWeight:'bold',
  paddingTop:10,
  paddingBottom:10,
  },


});
