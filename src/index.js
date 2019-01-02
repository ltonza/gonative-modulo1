import './config/ReactotronConfig';

import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer Café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    this.setState(prevState => ({
      todos: [...prevState.todos, { id: Math.random(), text: 'novo todo' }],
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
