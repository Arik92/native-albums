import React from 'react';

import {
   Text,
   View,
   Image,
   Linking
  } from 'react-native';
  import Card from './Card';
  import CardSection from './CardSection';
  import Button from './Button';

  const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { imageDefs, textContainer, thumbStyle, headerTextStyle, artworkStyle } = styles;
    return (
      <Card>
        <CardSection>
        <View style={thumbStyle}>
        <Image source={{ uri: thumbnail_image }} style={imageDefs} />
        </View>
        <View style={textContainer}>
          <Text style={headerTextStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
        </CardSection>

        <CardSection>
        <Image style={artworkStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
        <Button onPress={() => Linking.openURL(url)} text={'Buy now!!!'} />
        </CardSection>

      </Card>
    );
  };

  const styles = {
    textContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    imageDefs: {
      height: 50,
      width: 50
    },
    artworkStyle: {
      height: 300,
      flex: 1,
      width: null
    },
    thumbStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    headerTextStyle: {
      fontSize: 18
    }
  };

  export default AlbumDetail;
// poleg: 00:20
// glilot: 22:20 or 00:30
