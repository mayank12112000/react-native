import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

const AppPro2 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>AppPro2</Text>
        <FlatCards />
        <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro2;
