import { StyleSheet } from 'react-native'
import { SIZES } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: SIZES.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'semiBold',
    fontSize: SIZES.xLarge - 2,
  },
})
