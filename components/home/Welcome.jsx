import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './welcome.styles'
import { COLORS, SIZES } from '../../constants/theme'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcomeText(
          COLORS.black,
          SIZES.xSmall,
          SIZES.xxLarge - 6,
          50
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
  )
}

export default Welcome
