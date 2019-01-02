import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import Todo from '~/components/Todo';

const bgColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
});

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
