import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

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

  searchContainer: {
    height: 50,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.small,
    marginVertical: SIZES.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    color: COLORS.gray,
    marginHorizontal: 10,
  },
  searchWrapper: {
    flex: 1,
  },
  searchInput: {
    fontFamily: 'regular',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.medium,
  },
})
