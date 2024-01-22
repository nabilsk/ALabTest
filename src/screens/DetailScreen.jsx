import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Header from '../components/Header';
import {COLORS} from '../constants/colors';
import ProductTextCompo from '../components/ProductTextCompo';
import CustomIcon from '../components/CustomIcon';
import {Font} from '../constants/constants';

const DetailScreen = props => {
  const {data, color} = props.route.params;
  return (
    <Animated.View
      style={styles.container}
      sharedTransitionTag={data.id.toString()}>
      <Animated.ScrollView
        style={styles.subContainer}
        sharedTransitionTag={data.id.toString() + 'q'}>
        <Header isDetailScreen={true} color={color} />
        <ImageBackground
          source={require('../assets/rectImg2.png')}
          style={styles.rectImgStyle}
          resizeMode="stretch"
          tintColor={color}>
          <ProductTextCompo data={data} isDetailScreen={true} />
          <Animated.Image
            src={data.image}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </ImageBackground>

        {/**overview & bio scetion  */}
        <Animated.View
          style={styles.overViewCntStyle}
          sharedTransitionTag={data.id.toString() + 'l'}>
          <Text style={styles.overViewTxtStyle}>Overview</Text>
          <View style={styles.iconCntStyle}>
            <CustomIcon value={data.water} label={'WATER'} />
            <CustomIcon value={data.light} label={'LIGHT'} />
            <CustomIcon value={data.fertilizer} label={'FERTILIZER'} />
          </View>

          <Text style={[styles.overViewTxtStyle, {marginTop: 33}]}>
            Plant Bio
          </Text>

          <Text style={styles.bioStyle}>{data.bio}</Text>
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.white,
  },
  subContainer: {
    backgroundColor: COLORS.white,
  },
  rectImgStyle: {
    width: '100%',
    height: 315,
  },
  imgStyle: {
    width: 227,
    height: 250,
    position: 'absolute',
    top: 77,
    left: 132,
  },
  overViewCntStyle: {
    width: '80%',
    marginTop: 22,
    alignSelf: 'center',
  },
  overViewTxtStyle: {
    color: COLORS.fontColor,
    fontWeight: '700',
  },
  iconCntStyle: {flexDirection: 'row', justifyContent: 'space-between'},
  bioStyle: {
    color: COLORS.fontColor,
    fontFamily: Font.regular,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30,
  },
});
