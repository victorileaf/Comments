import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import ContentContainer from './ContentContainer'
import CommentContainer from './CommentContainer'
export default class RootContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView
       keyboardShouldPersistTaps={true}>
      <ContentContainer/>
      <CommentContainer/>
      </ScrollView> 
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
