import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants/theme'

export const styles = StyleSheet.create({
  homeColor: {
    backgroundColor: 'red',
    height: SIZES.height,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartWrapper: {
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    width: 16,
    height: 16,
    right: 0,
    backgroundColor: 'green',
    display: 'flex',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: 'regular',
    fontWeight: '600',
    fontSize: 10,
    color: COLORS.lightWhite,
  },
})
