import React, {Component} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {Container, Content, Text, View} from 'native-base';
import {bindActionCreators} from 'redux';

import CongratsStyles from './Congrats.styles';
import * as actions from '../../../redux/actions';
import {GLOBAL_STYLE_DEFINITIONS, STYLES} from '../../../config/constants/style';
import CelButton from '../../atoms/CelButton/CelButton';
import {MainHeader} from '../../molecules/MainHeader/MainHeader';

@connect(
  () => ({}),
  dispatch => bindActionCreators(actions, dispatch),
)

class CongratsScreen extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {navigateTo} = this.props;

    const statusColor = '#69e159';
    const statusCopy = 'Complete';

    return (
      <Container>
        <MainHeader
          {...this.props}
          customStyle={{backgroundColor: STYLES.PRIMARY_BLUE}}
          cancelBtn
          onCancel={() => navigateTo('Home', true)}/>
        <Content bounces={false} style={CongratsStyles.content}>

          <View style={[CongratsStyles.heroImageWrapper, GLOBAL_STYLE_DEFINITIONS.centeredColumn]}>
            <Image source={require('../../../../assets/images/whale-good-job.png')} resizeMode="contain" style={[CongratsStyles.heroImage]}/>
          </View>

          <Text style={CongratsStyles.heading}>Congrats</Text>

          <Text style={CongratsStyles.welcomeText}>
            You have successfully completed verification process.
          </Text>

          <View style={CongratsStyles.statusSection}>
            <View style={[GLOBAL_STYLE_DEFINITIONS.centeredColumn, { marginTop: 15 }]}>
              <Text style={CongratsStyles.verificationText}>
                Profile verification status:
              </Text>
            </View>

            <View style={[GLOBAL_STYLE_DEFINITIONS.centeredColumn]}>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
                  <View style={{width: 14, height: 14, borderRadius: 14, backgroundColor: statusColor, marginRight: 15}}/>
                </View>
                <Text style={{color: statusColor, fontFamily: 'agile-medium', fontSize: 18}}>{ statusCopy }</Text>
              </View>
            </View>

            <View style={CongratsStyles.cancelWrapper}>
              <CelButton
                iconRight={false}
                // customStyles={{backgroundColor: 'transparent', borderWidth: 2, borderColor: '#fff'}}
                // customTitleStyles={{color: "#fff", fontSize: FONT_SCALE * 18}}
                onPress={() => navigateTo('ComingSoon')}
                title="See the roadmap"/>
            </View>
          </View>

        </Content>
      </Container>
    );
  }
}

export default CongratsScreen;
