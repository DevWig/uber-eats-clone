import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

import style from './Components.module.css'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
      <View style={style.typeTabContainer}>
        <HeaderButton
          text="Delivery"
          activeTab={activeTab}
          setActiveTab={setActiveTab}  
        />
        <HeaderButton
          text="Pickup"
          activeTab={activeTab}
          setActiveTab={setActiveTab} 
        />
      </View>
  )
}

export default HeaderTabs;

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={[style.typeButton, {backgroundColor: (props.activeTab === props.text ? 'black' : 'white')}]}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={[style.typeButtonText, {color: (props.activeTab === props.text ? 'white' : 'black')}]}>{props.text}</Text>
    </TouchableOpacity>
  </View>
  
)

