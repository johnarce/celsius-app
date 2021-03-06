import React, {Component} from 'react';
import {Body, Button, Header, Icon, Left, List, ListItem, Right, Text, Thumbnail, Title, View} from "native-base";
import PropTypes from "prop-types";
import {Modal, TouchableOpacity} from "react-native";

import SelectCoinStyles from "./SelectCoinModal.styles";


class SelectCoinModal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    animation: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    visible: false,
    animation: 'slide'
  };

  render() {
    const {visible, animation, onClose, supportedCurrencies} = this.props;

    // Capitalize currency names bitcoin -> Bitcoin
    supportedCurrencies.forEach(sc => {
      const currency = sc;
      currency.name = sc.name.replace(/\b\w/g, l => l.toUpperCase());
      return currency;
    });

    return (
      <Modal animationType={animation}
             visible={visible}
             onRequestClose={() => onClose(null)}
      >
        <Header style={[SelectCoinStyles.header]}>
          <Left>
            <Button title='Back' transparent onPress={() => onClose(null)}>
              <Icon style={SelectCoinStyles.backArrow} name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title style={SelectCoinStyles.headerTitle}>Select Coin</Title>
          </Body>
          <Right/>
        </Header>

        <View style={SelectCoinStyles.modal}>
          {supportedCurrencies ? (
            <List
              dataArray={supportedCurrencies}
              renderRow={(item) =>
                <ListItem avatar>
                  <Left>
                    <Thumbnail square style={{height: 40, width: 40}} source={{uri: item.image_url}}/>
                  </Left>
                  <Body>
                  <TouchableOpacity onPress={() => onClose(item)}>
                    <Text style={SelectCoinStyles.coinTitle}>{item.name}</Text>
                    <Text style={SelectCoinStyles.shortTitle}>{item.short}</Text>
                  </TouchableOpacity>
                  </Body>
                </ListItem>
              }
            />
          ) : null}
        </View>
      </Modal>
    );
  }
}

export default SelectCoinModal;
