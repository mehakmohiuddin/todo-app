'use client';

import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

type Todo = {
  id: string;
  body: string;
};

type AddTodoProps = {
  addTodo: (todo: Todo) => void; // Explicitly type the addTodo function
};

function AddTodo({ addTodo }: AddTodoProps) {
  const toast = useToast();
  const [content, setContent] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!content) {
      toast({
        title: 'No Content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo: Todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter your todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
