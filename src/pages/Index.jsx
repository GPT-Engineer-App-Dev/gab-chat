import { Box, Container, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" bg="gray.100" p={4} borderRadius="lg" overflowY="auto" height="70vh">
          {messages.map((message, index) => (
            <Text key={index} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"} bg="blue.100" p={2} borderRadius="md">
              {message.text}
            </Text>
          ))}
        </Box>
        <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendMessage}>Send</Button>
      </VStack>
    </Container>
  );
};

export default Index;