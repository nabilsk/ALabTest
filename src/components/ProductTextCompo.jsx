import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {Font} from '../constants/constants';

const ProductTextCompo = ({data, isDetailScreen}) => {
  return (
    <View>
      <View style={styles.categoryStyle}>
        <Text style={styles.categoryTxtStyle}>{data.category}</Text>
        <Image
          source={require('../assets/paw.png')}
          style={styles.pawImgStyle}
        />

        {/**below code shows rating card for details screen */}
        {isDetailScreen && (
          <View style={styles.ratingStyle}>
            <Image
              source={require('../assets/icons/star.png')}
              style={styles.starStyle}
              resizeMode="contain"
            />
            <Text style={styles.ratingTxtStyle}>4.8</Text>
          </View>
        )}
      </View>
      <Text
        style={[
          styles.productNameStyle,
          {
            fontSize: !isDetailScreen ? 32 : 38,
          },
        ]}>
        {data.name}
      </Text>

      {/**price is shown for home and detail accordingly */}
      {isDetailScreen && (
        <Text style={[styles.productPriceTxtStyle, {marginTop: 25}]}>
          PRICE
        </Text>
      )}
      <Text
        style={[
          styles.productPriceStyle,
          {marginTop: !isDetailScreen ? 15 : 1},
        ]}>
        ${data.price}
      </Text>

      {/*size shown for detail page*/}
      {isDetailScreen && (
        <>
          <Text style={[styles.productPriceTxtStyle, {marginTop: 25}]}>
            SIZE
          </Text>
          <Text
            style={[
              styles.productPriceStyle,
              {marginTop: !isDetailScreen ? 15 : 1},
            ]}>
            {data.size}
          </Text>
        </>
      )}
    </View>
  );
};

export default ProductTextCompo;

const styles = StyleSheet.create({
  categoryStyle: {
    paddingLeft: 20,
    paddingTop: 30,
    flexDirection: 'row',
  },
  categoryTxtStyle: {
    fontWeight: '700',
    lineHeight: 21,
    color: COLORS.fontColor,
  },
  pawImgStyle: {
    width: 17,
    height: 17.5,
    marginLeft: 20,
  },
  productNameStyle: {
    color: COLORS.fontColor,
    fontFamily: Font.bold,
    lineHeight: 39.68,
    marginLeft: 20,
    marginTop: 4,
  },
  productPriceTxtStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.fontColor,
    marginLeft: 20,
  },
  productPriceStyle: {
    color: COLORS.fontColor,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 20,
  },
  ratingStyle: {
    height: 26,
    width: 72,
    elevation: 1,
    marginLeft: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.white,
    borderRadius: 40,
  },
  starStyle: {
    width: 15,
    height: 15,
  },
  ratingTxtStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.green,
  },
});
