import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

/**
 * Caso seja necessário diferenciar algo de acordo com o SO,
 * é possível utilizar o Platform.select abaixo
 * , fazer o teste {Platform.OS === 'ios' ? valores para iOS : valores para Android}
 * ou a separação dos arquivos em Todo.ios.js e Todo.android.js
 */
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

const Todo = ({ title }) => (
  <View>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'default',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
