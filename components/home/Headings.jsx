import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import './headings.style'
import { styles } from './headings.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings
