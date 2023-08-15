import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './welcome.styles'
import { COLORS, SIZES } from '../../constants/theme'
import { Ionicons } from '@expo/vector-icons'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.welcomeText(
            COLORS.black,
            SIZES.xSmall,
            SIZES.xxLarge - 10,
            40
          )}
        >
          Find The Most
        </Text>
        <Text
          style={styles.welcomeText(
            COLORS.primary,
            0,
            SIZES.xxLarge - 14,
            'auto'
          )}
        >
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='search-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=''
            onPressIn={() => {}}
            placeholder='What are you looking for'
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name='camera-outline' size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
