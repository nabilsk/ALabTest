import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import ProductList, {setProductlist} from '../redux/reducers/productList';
import {COLORS} from '../constants/colors';
import {width} from '../constants/constants';
import ProductListItem from '../components/ProductListItem';
import Header from '../components/Header';

const HomeSCreen = props => {
  const productData = useSelector(state => state.productList.productListData);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
      );

      if (res.status === 200) {
        dispatch(setProductlist(res.data));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loaderStyle}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      ) : (
        <View style={styles.subContainer}>
          <Header isDetailScreen={false} />
          <FlatList
            data={productData}
            keyExtractor={(item, i) => i}
            renderItem={({item, index}) => {
              return (
                <ProductListItem
                  data={item}
                  index={index}
                  navigation={props.navigation}
                />
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeSCreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
