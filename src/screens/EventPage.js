//Home Screen/Events
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  Animated,
  Image,
  TouchableHighlight,
  TouchableOpacity } from 'react-native';
import { 
  loadSettings,
  saveSettings 
} from '../storage/settingsStorage';

export default class EventPage extends Component {
  
  // handleNameChange(name){
  //   this.setState({name});
  // }
  
  // handleSubmit(){
  //   saveSettings(this.state);
  // }
    
  
  // constructor(props) {
  //   super(props);

  //   this.state = { name: '' }

  //   this.handleNameChange = this.handleNameChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // async componentDidMount() {
  //   const initialState = await loadSettings();

  //   this.setState(initialState);
  // } 
  
constructor() {
    super();

    this.state = { valueArray: [], disabled: false }
    this.index = 0;
    this.animatedValue = new Animated.Value(0);
}
addMore = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { index: this.index }
    this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ).start(() => {
        this.index = this.index + 1;
        this.setState({ disabled: false });
      });
    });
  }
buttonPress=()=>{
    this.setState({viewSection:true})
}

  //beginning of paste

// render() {
    // const animationValue = this.animatedValue.interpolate(
    //   {
    //     inputRange: [0, 1],
    //     outputRange: [-59, 0]
    //   });

    // let newArray = this.state.valueArray.map((item, key) => {
    //   if ((key) == this.index) {
    //     return (
    //       <Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
    //         <Text style={styles.headerText}>Row {item.index}</Text>
    //       </Animated.View>
    //     );
    //   }
    //   else {
    //     return (
    //       <View key={key} style={styles.viewHolder}>
    //         <Text style={styles.headerText}>Row No :- {item.index}</Text>
    //       </View>
    //     );
    //   }
    // });

//     return (
    //   <View style={styles.container} >
    //     <ScrollView>
    //       <View style={{ flex: 1, padding: 4 }}>
    //         {
    //           newArray
    //         }
    //       </View>
    //     </ScrollView>

    //     <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} disabled={this.state.disabled} onPress={this.addMore}>
    //       <Image source={require('./images/addButton.png')} style={styles.buttonImage} />
    //     </TouchableOpacity>
    //   </View>
    // );
//   }

  //end of paste


  render() {

    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [-59, 0]
      });

    let newArray = this.state.valueArray.map((item, key) => {
      if ((key) == this.index) {
        return (
          <Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
            <Text style={styles.headerText}>To-do {item.index}</Text>
            <TextInput></TextInput>
          </Animated.View>
        );
      }
      else {
        return (
          <View key={key} style={styles.viewHolder}>
            <Text style={styles.headerText}>To do : {item.index}</Text>
            <TextInput>Placeholder</TextInput>
          </View>
        );
      }
    });
    return (
      <SafeAreaView style={styles.ViewContainer}>
          <View style={styles.informationBox}>  
            <View style={styles.titleBox}>
              <Text style={styles.titleStyle}>Event Page Screen</Text>
            </View>
            <View style={styles.whereWhenBox}>
              <View style={styles.whereWhenItem}>
                <View style={styles.icon}></View>
                <Text>Where</Text>
              </View>
              <View style={styles.whereWhenItemB}>
                <View style={styles.icon}></View>
                <Text>When</Text>  
              </View>
              <View style={styles.whereWhenItem}>
                <View style={styles.icon}></View>
                <Text>Who</Text>
              </View>
            </View>
          </View>
          <SafeAreaView style={styles.scrollView}>
            
          </SafeAreaView>
    <View style={styles.container} >
        <ScrollView>
        
          <View style={styles.toDoList}>
        
            {
              newArray
            }
          </View>
        </ScrollView>

        <View styles={styles.informationBox}>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} disabled={this.state.disabled} onPress={this.addMore}>
          {/* <Image source={require('./addButton.png')} style={styles.buttonImage} /> */}
        <Text>Add to-do</Text>
        </TouchableOpacity>
        </View>
      </View>
    
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create(
  {
    ViewContainer:
    {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    container: {
      flex: 1,
      // paddingTop: 45,
      backgroundColor: '#F5FCFF',
      flexDirection: 'row',
    },
    toDoList: { 
      justifyContent: 'center',
      flexDirection: 'row', 
      flexWrap: 'wrap',
      // flex: 4, 
      padding: 4, 
      alignItems: 'flex-start', 
      alignContent: 'flex-start'
    },
    viewHolder: {
      flex: 0.3,
      height: 100,
      backgroundColor: '#9229BA',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 4,
      flexWrap: 'wrap',
      // flexDirection: 'row', 
    },
    headerText: {
      color: 'white',
      fontSize: 25
    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 90,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue'
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    },
    titleStyle: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Avenir-MediumOblique'
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },
    informationBox: {
      flex: 1,
      backgroundColor: '#007BFF',
    },
    listBox: {
      backgroundColor: '#FFFFFF',
    },
    titleBox: {
      flex: 1,
      flexDirection: 'row', 
      backgroundColor: '#BB7BFF',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    whereWhenBox: {
      flex: 1,
      backgroundColor: '#222BFF',
    },
    whereWhenItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    whereWhenItemB: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'lightgrey',
    },
    scrollView: {
      flex: 1,
      backgroundColor: "#1a1a1a"
    },
    icon: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: 'white',
      marginHorizontal: 25,
    },
  });