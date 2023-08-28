import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

export const styles = StyleSheet.create({
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
  noResultContainer: {
    // backgroundColor: 'blue',
    height: '100%',
    // height: 100,
    // alignItems: 'center',
    // flex: 1,
  },
  noResultImage: {
    objectFit: 'contain',
    // resizeMode: 'contain',
    // objectFit: 'cover',
    // backgroundColor: 'red',
    // marginVertical: 'auto',

    height: SIZES.height - 250,
    width: SIZES.width - 80,
    marginLeft: 20,
  },
})
