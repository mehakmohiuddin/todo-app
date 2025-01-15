'use client';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import {useState} from 'react'
import { nanoid } from 'nanoid';

 function AddTodo({addTodo}) {
  const toast = useToast();
  function handleSubmit(e){
    e.preventDefault();
    if(!content){
      toast({
        title: 'No Content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }
  const todo = {
    id: nanoid(),
     body: content
  }
  addTodo(todo);
  setcontent('');

  }
  const [content, setcontent]= useState('');
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input variant={"filled"} placeholder="Enter your todo"
        value={content} onChange = {(e)=>setcontent(e.target.value)}/>
        <Button colorScheme={"pink"} px="8" type={"submit"}>Add Todo</Button>
      </HStack>

    </form>
  )
}
export default AddTodo;