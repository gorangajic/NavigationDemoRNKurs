import React from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet
} from 'react-native';

const colors = {
  green: '#bada55',
  red: '#dd1111',
};

function Button ({ color, onPress, label }) {
  const backgroundColor = colors[color] ? colors[color] : 'white';
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View
        style={[styles.box, {
          backgroundColor,
        }]}
      >
        <Text style={styles.buttonText}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  )
}



const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderColor: 'black',
    borderRadius: 3,
  },
  buttonText: {
    color: "#333",
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default Button;
