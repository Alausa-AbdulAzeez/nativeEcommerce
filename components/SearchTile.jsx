import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './searchTile.styles'

const SearchTile = ({ item }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.productImg} source={{ uri: item?.imageUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item?.title}</Text>
          <Text style={styles.supplier}>{item?.supplier}</Text>
          <Text style={styles.supplier}>{item?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile
