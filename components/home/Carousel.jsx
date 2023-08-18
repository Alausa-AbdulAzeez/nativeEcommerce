import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants/theme'
import IMG1 from '../../assets/images/fn1.jpg'
import IMG2 from '../../assets/images/fn2.jpg'
import IMG3 from '../../assets/images/fn3.jpg'

const CarouselComponent = () => {
  const slides = [
    require('../../assets/images/fn1.jpg'),
    require('../../assets/images/fn2.jpg'),
    require('../../assets/images/fn3.jpg'),
  ]
  // const slides = [IMG1, IMG2, IMG3]
  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ width: '93%' }}
        autoplay={true}
        circleLoop
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CarouselComponent
