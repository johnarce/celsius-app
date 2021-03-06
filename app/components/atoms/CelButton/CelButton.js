import React, { Component } from 'react';
import { Text } from "native-base";
import PropTypes from "prop-types";
import { TouchableOpacity, Image, View } from "react-native";


import OldButton from './CelButton.old';
import CelButtonStyles from './CelButton.styles';
import Icon from "../Icon/Icon";
import {COLORS} from "../../../config/constants/style";
import stylesUtil from "../../../utils/styles-util";

const buttonColors = ['blue', 'green', 'pink'];
const buttonSizes = ['small', 'medium'];

class CelButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    iconRight: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    color: PropTypes.oneOf(buttonColors),
    size: PropTypes.oneOf(buttonSizes),
    transparent: PropTypes.bool,
    inverse: PropTypes.bool,
    white: PropTypes.bool,
    margin: PropTypes.string,
  };

  static defaultProps = {
    iconRight: undefined,
    disabled: false,
    loading: false,
    color: 'blue',
    size: 'medium',
    transparent: false,
    inverse: false,
    white: false,
    margin: '0 0 0 0',
  };

  getButtonStyles() {
    const { disabled, color, size, transparent, inverse, white, margin } = this.props;
    const buttonStyles = [CelButtonStyles.baseButton];

    buttonStyles.push(CelButtonStyles[`${color}Button`]);
    buttonStyles.push(CelButtonStyles[`${size}Button`]);
    buttonStyles.push(stylesUtil.getMargins(margin));

    if (transparent) buttonStyles.push(CelButtonStyles.transparentButton);
    if (inverse) buttonStyles.push(CelButtonStyles.inverseButton);
    if (white) buttonStyles.push(CelButtonStyles.whiteButton);
    if (disabled) buttonStyles.push(CelButtonStyles.disabledButton);

    return buttonStyles;
  }

  getTitleStyles() {
    const { disabled, color, size, transparent, inverse, white } = this.props;
    const titleStyles = [CelButtonStyles.baseTitle];

    titleStyles.push(CelButtonStyles[`${color}BtnTitle`]);
    titleStyles.push(CelButtonStyles[`${size}BtnTitle`]);

    if (transparent) titleStyles.push([CelButtonStyles.transparentBtnTitle]);
    if (white || inverse || disabled) titleStyles.push({ color: COLORS[color] });
    if (disabled && white) titleStyles.push({ color: 'white' });

    return titleStyles;
  }

  renderIconRight() {
    const { iconRight, color, white, disabled } = this.props;
    return (
      <Icon
        name={iconRight}
        height='25'
        viewBox='0 0 26 26'
        fill={ white && !disabled ? COLORS[color] : 'white' }
        style={{marginLeft: 10, marginTop: 2, opacity: 0.5}}
      />
    )
  };

  render() {
    // TODO(fj) remove when All Buttons are refactored
    if (this.props.title) return <OldButton { ...this.props } />;

    const { children, onPress, iconRight, disabled, loading } = this.props;

    const buttonStyles = this.getButtonStyles();
    const titleStyles = this.getTitleStyles();

    return (
      <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
        { loading ? (
          <View style={buttonStyles}>
            <Image source={require('../../../../assets/images/icons/animated-spinner.gif')} style={CelButtonStyles.loader} />
          </View>
        ) : (
          <View style={buttonStyles}>
            <Text style={titleStyles}>{ children || this.props.title }</Text>
            { iconRight ? this.renderIconRight() : null }
          </View>
        ) }
      </TouchableOpacity>
    )
  }
}

export default CelButton;
