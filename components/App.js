import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Switch,
  Slider,
  Picker,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
  // TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import Header from './Header';
import ConnectionStatus from './ConnectionStatus';
// import Book from './Book';
const d = Dimensions.get('window');
export default class Books extends Component {
  state = {
    switchValue: false,
    language: 'js',
    textValue: 'Valor por defecto',
    nameValue: '',
  }


  changeSwitch = () => {
    this.setState({
      switchValue: !this.state.switchValue,
    });
    this._inputRef.focus();
    console.warn('ancho', d.width, 'alto', d.height)
  }

  changeSlider = (value) => {
    console.warn('valor', value)
  }

  slidingComplete = (value) => {
    console.warn('valor final', value)
  }

  changePicker = (itemValue) => {
    this.setState({ language: itemValue });
  }

  changeText = (value) => {
    this.setState({ textValue: value });
  }

  changeName = (value) => {
    this.setState({ nameValue: value });
  }

  inputRef = (r) => { this._inputRef = r }
  nameRef = (r) => { this._nameRef = r }

  render() {
    return (
      <ScrollView
        style={styles.container}
      >
        <StatusBar translucent backgroundColor={'#ffd70050'} barStyle={'dark-content'} />
        <Header />
        <Switch value={this.state.switchValue} onValueChange={this.changeSwitch} />
        <Slider
          minimumValue={100}
          maximumValue={200}
          onValueChange={this.changeSlider}
          onSlidingComplete={this.slidingComplete}
          style={{width: 100}}
          thumbTintColor={'blue'}
        />
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.changePicker}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="csharp" />
          <Picker.Item label="PHP" value="php" />
          <Picker.Item label="Python" value="python" />
        </Picker>
        <TextInput
          value={this.state.textValue}
          onChangeText={this.changeText}
          onBlur={() => console.warn('blur')}
          onFocus={() => console.warn('focus')}
          style={{backgroundColor: 'white'}}
          returnKeyType={'search'}
          placeholder={'Escribi el nombre del libro'}
          ref={this.inputRef}
          onEndEditing={() => { this._nameRef.focus() }}
        />
        <TextInput
          value={this.state.nameValue}
          onChangeText={this.changeName}
          style={{backgroundColor: 'white'}}
          placeholder={'Escribi tu nombre'}
          ref={this.nameRef}
        />
        <TouchableWithoutFeedback onPress={() => {console.warn('touchable')}}>
          <View style={{width: 100, height: 100, margin: 20, backgroundColor: '#FE0'}}>
            <Text>Touchable sin feedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => {console.warn('touchable opacity')}}
          onLongPress={() => {console.warn('long press')}}
        >
          <View style={{width: 100, height: 100, margin: 20, backgroundColor: '#FE0'}}>
            <Text>Touchable con feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {console.warn('touchable opacity')}}
          onLongPress={() => {console.warn('long press')}}
        >
          <View style={{width: 100, height: 100, margin: 20, backgroundColor: '#FE0'}}>
            <Text>Touchable con feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {console.warn('touchable opacity')}}
          onLongPress={() => {console.warn('long press')}}
        >
          <View style={{width: 100, height: 100, margin: 20, backgroundColor: '#FE0'}}>
            <Text>Touchable con feedback</Text>
          </View>
        </TouchableOpacity>
        <ConnectionStatus />
      </ScrollView>
    );
  }
}
/*
<TouchableNativeFeedback
  onPress={console.warn('touchable opacity')}
>
  <View style={{ width: 150, height: 100, backgroundColor: 'red' }}>
    <Text style={{ margin: 30 }}>Button</Text>
  </View>
</TouchableNativeFeedback>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
  },
});

AppRegistry.registerComponent('Books', () => Books);
