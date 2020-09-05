import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { BottomTabParamList } from '../../navigation/types'
import { BottomNavigatorScreenName } from '../../navigation/ScreenNames'

export const SearchScreen = ({
  navigation,
}: StackScreenProps<BottomTabParamList, BottomNavigatorScreenName.SEARCH>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen SearchScreen</Text>
      {/* <TouchableOpacity onPress={() => navigation.replace('Explore')} style={styles.link}> */}
      <TouchableOpacity onPress={() => alert('expolor')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})