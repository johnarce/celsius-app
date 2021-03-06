import { StyleSheet, Dimensions } from 'react-native';
import {STYLES} from "../../../config/constants/style";

const { width } = Dimensions.get('window');
const imageSize = 0.5 * width;

const ImageHeadingStyle = StyleSheet.create({
  wrapper: {

  },
  coloredSection: {
    backgroundColor: STYLES.PRIMARY_BLUE,
    height: imageSize / 2 + 10,
  },
  greySection: {
    backgroundColor: STYLES.GRAY_3,
    height: imageSize / 2 + 10,
  },
  imageWrapper: {
    position: 'absolute',
    top: 10,
    left: (width - imageSize) / 2,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: 5,
    borderColor: STYLES.GRAY_3,
  },
});

export default ImageHeadingStyle;
