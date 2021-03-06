import React from 'react';
import { View, Text, } from 'react-native';
// import {} from 'native-base';

// import {STYLES} from "../../config/constants/style";
import CelHeadingStyle from "./CelHeading.styles";

const CelHeading = (props) => (
  <View style={[CelHeadingStyle.container, CelHeadingStyle[props.color]]}>
    <Text style={CelHeadingStyle.heading}>{ props.text }</Text>
    { props.subheading ? <Text style={CelHeadingStyle.subheading}>{ props.subheading.toUpperCase() }</Text> : null }
  </View>
)

export default CelHeading;
