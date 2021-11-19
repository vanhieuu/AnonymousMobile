import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ListHorizontal from './components/ListHorizontal';
import ListNews from './components/ListNews';

const News = () => {
  return (
    <SafeAreaView>
      <ListNews
        ListHeaderComponent={
          <>
            <ListHorizontal />
          </>
        }
      />
      
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({});
