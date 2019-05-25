import React from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Button from '../components/Button';

class Settings extends React.Component {
  render() {
    return (<View style={styles.container}>
        <Text style={styles.text}>
            Settings Page
        </Text>
        <Button
            label="Go to Setting"
        />
    </View>);
  }
}

export default Settings;

Settings.navigationOptions = {
    title: 'Settings',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      fontSize: 40,
      color: 'white',
  }
});
