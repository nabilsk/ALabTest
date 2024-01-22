import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

import {Font, width} from '../constants/constants';
import {COLORS} from '../constants/colors';
import ProductTextCompo from './ProductTextCompo';

const cardColorArray = ['#b0ead5', '#fff4ce', '#c1e8a4'];

const ProductListItem = props => {
  const {data, index, navigation} = props;
  const color = cardColorArray[index % cardColorArray.length];

  const handleClick = () => {
    navigation.push('detail', {data, color});
  };

  return (
    <Pressable style={styles.conatiner} onPress={handleClick}>
      <ImageBackground
        source={require('../assets/rectImg.png')}
        style={styles.imgContainer}
        tintColor={color}
        resizeMode="contain">
        <ProductTextCompo data={data} />
      </ImageBackground>
      <Animated.Image
        src={data.image}
        style={styles.imgStyle}
        sharedTransitionTag={data.id.toString() + 'n'}
      />
    </Pressable>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 14,
  },
  imgContainer: {
    width: width * 0.75,
    height: 177,
  },
  imgStyle: {
    width: 120,
    height: 172,
    position: 'absolute',
    right: '5%',
    top: -20,
  },
});
