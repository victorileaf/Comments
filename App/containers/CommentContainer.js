import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';


import CommentInputComponent from '../components/CommentInputComponent'
import CommentItemComponent from '../components/CommentItemComponent'
const array = ['Hello, I\'m new here!',];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class CommentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(array),
    };

    this.__updateComments=this.__updateComments.bind(this);
    this.__renderComments=this.__renderComments.bind(this);

  }

  render() {
    return (
      <View style={styles.container}>

       {this.__renderComments()}
      </View>
    );
  }

  __renderComments(){
    return(
<View>
 <CommentInputComponent
       updateCommentData={this.__updateComments}/>
 <View style={{
        marginTop:8,
        padding:10,
        backgroundColor:'#ecf0f1'}}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>
      Comments
      </Text>
      </View>
      <ListView
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={(data) => <CommentItemComponent comment={data} />}
     />
</View>
    );
  }

 

  __updateComments(text){
    array.unshift(text);
    this.setState({
      dataSource: ds.cloneWithRows(array),

    })
  }
}

const styles = StyleSheet.create({
  container: {


  },

});
