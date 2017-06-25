//code for android

//import a library for a component
import React from 'react';
import {
  AppRegistry,
  View
 }
  from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component

const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'albums!!'} />
  <AlbumList />
  </View>
);


AppRegistry.registerComponent('albums', () => App);

//render it to the device
