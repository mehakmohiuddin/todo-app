'use client';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { ChakraProvider } from '@chakra-ui/react';
import { Heading, VStack } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Define the Todo type
type Todo = {
  id: string;
  body: string;
};

function Home() {
  // State for the todos array
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize with an empty array to ensure server-side compatibility
    return [];
  });

  // Load todos from localStorage on the client side
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos) as Todo[]);
    }
  }, []);

  // Save todos to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to delete a todo by ID
  function deleteTodo(id: string): void {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  // Function to add a new todo
  function addTodo(todo: Todo): void {
    setTodos([...todos, todo]);
  }

  return (
    <ChakraProvider>
      <VStack p={2.5} paddingLeft={1300}>
        <IconButton
          icon={<FaSun />}
          isRound={true}
          size="lg"
          aria-label="Toggle Theme"
        />
      </VStack>
      <VStack>
        <Heading
          mb={'10'}
          fontWeight={'extrabold'}
          bgGradient={'linear(to-r, pink.500, pink.300, blue.500, blue.300)'}
          bgClip="text"
        >
          Awesome Todo App
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </ChakraProvider>
  );
}

export default Home;
