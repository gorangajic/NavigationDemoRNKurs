import React from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Link from '../components/Link';

class Home extends React.Component {
  render() {
    const wrap = [styles.background, styles.fullFlex];

    return (<View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>
        <Link
            color="green"
            to="Settings"
            label="Settings"
        />
    </View>);
  }
}

Home.navigationOptions = {
    title: 'Pocetna',
};

export default Home;

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
