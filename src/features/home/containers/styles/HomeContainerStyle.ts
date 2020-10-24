import { StyleSheet } from 'react-native';

import { color } from '../../../../config/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: color.background,
    paddingTop: 40,
  },
  title: {
    paddingLeft: 12,
    letterSpacing: 0.15,
    fontWeight: '500',
    paddingVertical: 16,
  },
  contentFlatlist: {
    justifyContent: 'space-evenly',
    paddingLeft: 16,
    paddingBottom: 28,
  },
  contentDetailBody: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 16,
  },
});