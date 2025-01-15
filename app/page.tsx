'use client';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { ChakraProvider } from '@chakra-ui/react';
import { Heading, VStack} from '@chakra-ui/react';
import { IconButton  } from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa'
import {useState, useEffect } from 'react'

function home(){
  const initialTodos = [
    {
    id : 1,
    body: 'get bread'
  },
  {
    id : 2,
    body: 'get butter'
  },
  ]; 
  const [todos, setTodos]= useState (
    () => JSON.parse(localStorage.getItem('todos')) || []
  );
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  })
  function deleteTodo(id){
     const newTodos = todos.filter(todo =>{
      return todo.id !== id
     })
     setTodos(newTodos)
  }
  function addTodo(todo){
    setTodos([...todos, todo])
  }; 
return(
    <ChakraProvider>
    
     <VStack p={2.5} paddingLeft={1300} >
     <IconButton icon= { <FaSun/>} isRound ='true' size ="lg"  /> 
     </VStack>
     <VStack>
     <Heading mb={'10'} fontWeight={"extrabold"} bgGradient={"linear(to-r, pink.500, pink.300, blue.500, blue.300)" } bgClip = "text" >
        Awesome Todo App
    </Heading>
    <TodoList todos={todos} deleteTodo = {deleteTodo}/>
    <AddTodo addTodo= {addTodo}/>
     </VStack>
     
    </ChakraProvider >
   
  );
}

export default home;