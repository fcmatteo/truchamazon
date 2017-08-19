import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  NetInfo,
  Text,
} from 'react-native';

const validConnections = [
  'MOBILE',
  'WIFI',
  'ETHERNET',
  'wifi',
  'cell',
];

export default class ConnectionStatus extends Component {
  state = {
    connected: false,
  }
  componentDidMount() {
    NetInfo.isConnected.fetch().then((status) => {
      if (status) {
        this.setState({ connected: true });
      }
      NetInfo.addEventListener('change', this.changeConnectionStatus);
    });
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change');
  }
  changeConnectionStatus = (status) => {
    if (validConnections.includes(status)) {
      this.setState({ connected: true });
    } else {
      this.setState({ connected: false });
    }
  }
  render() {
    const text = this.state.connected ? 'Estás conectado!'
      : 'No tenés conexión';
    return (
      <View style={[styles.container, !this.state.connected && styles.noConnection]}>
        <Text>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3fe176',
  },
  noConnection: {
    backgroundColor: '#de2d2d',
  },
});
