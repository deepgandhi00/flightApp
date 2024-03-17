import {StyleSheet} from 'react-native';
import {screenBackGround} from './colors';

const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  marginHorizontal16: {
    marginHorizontal: 16,
  },
  marginVertical16: {
    marginVertical: 16,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingVertical8: {
    paddingVertical: 8,
  },
  paddingVertical16: {
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: screenBackGround,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: screenBackGround,
    paddingHorizontal: 16,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginBottom24: {
    marginBottom: 24,
  },
  marginStart16: {
    marginStart: 16,
  },
  marginEnd16: {
    marginEnd: 16,
  },
  alignItemsBaseLine: {
    alignItems: 'baseline',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
});

export default commonStyles;
