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

  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    display: 'flex',
    height: 30,
    justifyContent: 'center',
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'semiBold',
    fontSize: SIZES.large,
  },
  ratingAndCountRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    top: SIZES.large,
    justifyContent: 'space-between',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
  count: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  countText: {
    color: COLORS.gray,
    fontFamily: 'medium',
    marginHorizontal: 8,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descriptionTitle: {
    fontFamily: 'medium',
    fontSize: SIZES.large - 2,
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'regular',
    fontSize: SIZES.small,
    marginBottom: SIZES.small,
  },
  locationAndDeliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    padding: 5,
    marginBottom: SIZES.small,
  },
  location: { flexDirection: 'row' },
  locationText: {
    marginHorizontal: 3,
  },
  delivery: { flexDirection: 'row' },
  deliveryText: {
    marginLeft: 3,
  },
  buyNowAndBagRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyNowBtn: {
    backgroundColor: COLORS.black,
    width: '70%',
    padding: SIZES.small - 3,
    borderRadius: SIZES.large,
  },
  buyNowText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontFamily: 'semiBold',
    textAlign: 'center',
  },
  bag: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
