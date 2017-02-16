import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Images from '../images'

export default class CommentItemComponent extends Component {
  constructor(props) {
    super(props);
    this.__renderUserDetails=this.__renderUserDetails.bind(this);

  }
  render() {
    return (
      <View style={styles.container}>
      {this.__renderUserDetails()}
      </View>
    );
  }

  __renderUserDetails(){
    return(
      <View style={styles.container}>
      <View style={styles.basicLayout}>
          <Image
           style={styles.avatarStyle}
           source={Images.avatar}/>
           <View style={{flexDirection:'column'}}>
           <Text style={styles.nameStyle}>
           Victor K Varghese
           </Text>
           <Text style={styles.dateStyle}>
           Jan 20, 2016
           </Text>
           </View>
       </View>
       <View style={{marginLeft:20,marginTop:8,}}>
       <Text style={styles.commentStyle}>{this.props.comment}</Text>
       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  basicLayout:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:16,
    marginLeft:16,
  },

  nameStyle:{
    marginLeft:8,
    color:'#02b875'
  },

  dateStyle:{
    marginLeft:8,
    color:'#7f8c8d',
  },

  commentStyle:{
    color:'#000000',
    fontSize:16,
  },

  avatarStyle:{
    width:40,
    height:40,
    borderRadius:20,
  },

});
