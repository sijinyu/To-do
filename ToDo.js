import React, { Component } from "react";

/*
import Icon from 'react-native-vector-icons/lonicons';
*/
import { View, Text, TouchableOpacity, StyleSheet ,Dimensions} from "react-native";
const { width, hegiht} = Dimensions.get("window");
export default class ToDo extends Component{
    state = {
        isEditing: false,
        isCompleted: false
    };
    render() {
      const {isCompleted, isEditing } = this.state;
      return (
      <View style={styles.container}>
    <View style={styles.column}>
    <TouchableOpacity onPress={this._togglecomplete}>
      <View style=
      {[styles.circle,
         isCompleted ? styles.completedCircle : styles.uncompletedCircle
       ]}
       />
      </TouchableOpacity>
      <Text
       style={[
         styles.text,
          isCompleted ? styles.completedText: styles.uncompletedText]
        }>Hello I'm a To Do
      </Text>
      </View>

       {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity>
               <View style={styles.actionContainer}>
                <Text style={styles.actionText}>V</Text>
              </View>
            </TouchableOpacity>
            </View>
       ) : (
         <View style={styles.actions}>
           <TouchableOpacity>
              <View style={styles.actionContainer}>
               <Text style={styles.actionText}>O</Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.actionContainer}>
                 <Text style={styles.actionText}>X</Text>
               </View>
                </TouchableOpacity>
               </View>
             )}
            </View>

    );
  }
  _togglecomplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
    };
  });
};
}
const styles = StyleSheet.create({
  container: {
      width: width -50,
      borderBottomColor:"#bbb",
      borderBottomWidth:StyleSheet.hairlineWidth,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
  },
  circle: {
      width:30,
      height:30,
      borderRadius:15,
      borderColor:"red",
      borderWidth:3,

      marginRight: 20
  },
  completedCircle: {
    borderColor:"#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical:20
  },
  completedText : {
    color:"#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText : {
    color:"#353839"

  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    justifyContent: "space-between"
  }
});
