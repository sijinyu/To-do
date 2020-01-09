
import React. {Component} from 'react'
import {
  Text,
  View,0
} from 'react-native';
const App = () => {
  render() {
    return (
      <View>
        <Text> Hello world!</Text>
      }
    };
    );
/*
class Blink extends Component {
  constructor(props) {
  super(props);
  this.state = {isShowingText: true };
  setInterval(() => (this.setState(
    prevState => (
      { isShowingText: !prevState.isShowingText})

    )), 1000);
}
render() {
  if (!this.state.isShowingText) {
    return null;
  }
  return (
    <Text>{this.props.text}</Text>
    );
}
}


type Props ={};
export default class App extends React.Component {
  state = {
     newTodo: ""
  };
    render() {

      const {newToDo} = this.state;
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}> Kawai To Do</Text>

          <View style={styles.card}>

            <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            value={newToDo}
            onChangeText={this._crontolNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
            />
          <ScrollView
          contentContainerStyle={styles.toDos}>
          <ToDo />
          </ScrollView>

          </View>
        </View>
        );
      }
    _crontolNewToDo = text => {
      this.setState({
        newToDo: text
        });
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center",

  },
  title: {
    color: "white",
    fontWeight: "200",
    fontSize: 30,
    marginTop: 50,

    marginBottom: 30
  },
  card:{
    backgroundColor: "white",
    flex :1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50,50,50)",
        shadowOpactiy: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })
   },

   input: {
     padding: 20,
     borderBottomWidth: 1,
     borderBottomColor: "#bbb",
     fontSize: 25

   },
   toDos: {
     alignItems:"center"
   }
  });











/*
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello World</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/
