'use client';
import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'

type Todo = {
  id: string;
  body: string;
};

type TodoListProps = {
  todos: Todo[]; // Array of Todo items
  deleteTodo: (id: string) => void; // Function to delete a Todo by ID
};

function TodoList({todos, deleteTodo}: TodoListProps) {
  if(!todos.length){
    return (
      <Badge colorScheme="green" p="4" borderRadius='lg'>
        No Todos, yay!!!
      </Badge>
    )
  }
 return (
  <div>
  <VStack divider={<StackDivider/>} borderColor="gray.100"
   borderWidth={'2px'} p='4' borderRadius={'lg'} width='500px'
   maxW={{base: "90px", sn:"90px", lg:"50px", xl:"40px" }} alignItems='stretch'>
   {todos.map((todo)=>(
     <HStack key={todo.id}>
       <Text>{todo.body}</Text>
       <Spacer/>
       <IconButton icon={<FaTrash />} isRound={true} onClick={() => deleteTodo(todo.id)} aria-label={''}/>
     </HStack>
   ))}
 </VStack>
</div>
 );
  }
  export default TodoList;