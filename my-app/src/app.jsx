// src/App.jsx
import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        ¡Mi aplicación con Chakra UI!
      </Heading>
      <Button colorScheme="teal">¡Hola, Chakra!</Button>
    </Box>
  );
}

export default App;
