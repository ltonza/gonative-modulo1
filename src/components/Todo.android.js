import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
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
