import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './productDetails.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/theme'

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/images/fn2.jpg')}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View>
            <Text>$100</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
