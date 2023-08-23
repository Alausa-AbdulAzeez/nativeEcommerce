import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    zIndex: 3,
  },
  upperRow: {
    position: 'absolute',
    top: SIZES.xxLarge,
    marginHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
    width: SIZES.width - 44,
    justifyContent: 'space-between',
    zIndex: 999,
  },
  image: { height: '45%', width: '100%' },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: '100%',
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
    marginBottom: -10,
    minHeight: 30,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
  },
})
