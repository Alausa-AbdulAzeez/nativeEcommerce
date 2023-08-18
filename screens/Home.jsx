import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './home.styles'
import { Ionicons } from '@expo/vector-icons'
import { CarouselComponent, Headings, Welcome } from '../components/index'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.locationText}>Shanghai, Chaina</Text>
          <View style={styles.cartWrapper}>
            <TouchableOpacity>
              <Ionicons name='cart-outline' size={24} />
            </TouchableOpacity>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <CarouselComponent />
        <Headings />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
