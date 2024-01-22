import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const imgObj = {
  WATER: require('../assets/icons/water.png'),
  LIGHT: require('../assets/icons/light.png'),
  FERTILIZER: require('../assets/icons/fertilizer.png'),
};

const CustomIcon = ({value, label}) => {
  let imageName = imgObj[label];
  return (
    <View style={styles.container}>
      <Image source={imageName} style={styles.img} resizeMode="contain" />
      <View style={{marginLeft: 13}}>
        <Text style={styles.valueTxtStyle}>{value}</Text>
        <Text style={styles.labelStyle}>{label}</Text>
      </View>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  img: {width: 22, height: 22},
  valueTxtStyle: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '600',
  },
  labelStyle: {
    color: COLORS.fontColor,
    fontWeight: '600',
    fontSize: 9,
  },
});
