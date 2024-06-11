import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskListScreen from './TaskListScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Lista de Tarefas' }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Adicionar Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
