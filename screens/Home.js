import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'

import HeaderTabs from '../components/HeaderTabs'
import style from './Home.module.css'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
    
  )
}

export default Home;