import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;