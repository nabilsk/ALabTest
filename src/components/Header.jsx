import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Font} from '../constants/constants';
import {COLORS} from '../constants/colors';

const Header = props => {
  const {isDetailScreen, color} = props;
  const bgColor = isDetailScreen ? color : COLORS.white;
  return (
    <>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View style={styles.subContainer1}>
          <Image
            source={require('../assets/logo.png')}
            resizeMode="contain"
            style={styles.logoStyle}
          />
          <Text style={styles.headerTxtStyle}>PLANTIFY</Text>
        </View>
        <View style={styles.subContainer2}>
          <Pressable>
            <Image
              source={require('../assets/bell.png')}
              style={styles.bellImgStyle}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/menu.png')}
              style={styles.menuImgStyle}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer1: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoStyle: {
    width: 34,
    height: 28,
    marginLeft: 19,
  },
  headerTxtStyle: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: Font.bold,
    color: COLORS.fontColor,
    marginLeft: 16,
  },
  subContainer2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bellImgStyle: {
    width: 19,
    height: 20,
    marginRight: 16,
  },
  menuImgStyle: {
    width: 31,
    height: 30,
    marginRight: 12,
  },
});
