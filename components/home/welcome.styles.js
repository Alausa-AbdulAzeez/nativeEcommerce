import { StyleSheet } from 'react-native'
import { SIZES } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  welcomeText: (color, marginTop, fontSize, height) => ({
    fontFamily: 'bold',
    fontSize: fontSize,
    marginHorizontal: 12,
    color: color,
    marginTop: marginTop,
    height: height,
  }),
})
