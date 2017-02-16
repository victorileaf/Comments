import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Metrics from '../themes/Metrics'
import Images from '../images'

export default class CommentInputComponent extends Component {
  constructor(props, context) {
      super(props, context);
        this.state={
          commentText:'',
          isBtnEnabled:false,
        }
        this.__addComment=this.__addComment.bind(this);
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.basicLayout}>
          <Image
           style={styles.avatarStyle}
           source={Images.avatar}/>
          <TextInput
          ref={'textInput'}
           style={styles.commentInput}
           placeholder={'Write a comment...'}
           placeholderTextColor='#7f8c8d'
           underlineColorAndroid='#ff000000'
           onChangeText={(text)=>{
             if(text.length == 0){
               this.setState({
                 isBtnEnabled:false
               })
             }
             else{
               this.setState({
                 isBtnEnabled:true
               })
             }
             this.setState({
               commentText:text
             })
           }}
           value={this.state.commentText}
          />
          </View>
          <View style={{alignItems:'flex-end'}}>
          {this.__renderCommentBtn()}
          </View>
      </View>
    );
  }

  __renderCommentBtn(){
    if(this.state.isBtnEnabled){
      return(
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={this.__addComment}
        style={styles.commentBtn}>
        <View>
        <Text
        style={{color:'#FFFFFF'}}>Comment</Text>
        </View>
        </TouchableOpacity>
      );
    }
    else{
      return null;
    }
  }

  __addComment(){
    this.props.updateCommentData(this.state.commentText);
    this.setState({
      commentText:'',
      isBtnEnabled:false,
    })
  }


}

const styles = StyleSheet.create({
  container: {
    marginLeft:16,
    marginRight:16,
  },
  basicLayout:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:16,
  },
  avatarStyle:{
    width:50,
    height:50,
    borderRadius:50,
  },
  commentInput : {
   color:'#000000',
   fontSize:16,
   paddingBottom:0,
   paddingTop:0,
   height:(Platform.OS === 'ios') ?60:60,
   width:Metrics.screenWidth-100,
 },
 commentBtn:{
   width:100,
   paddingTop:8,
   paddingBottom:8,
   backgroundColor:'#02b875',
   alignItems:'center',
   borderRadius:20,}
});
