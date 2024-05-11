import { Box, Flex, Input, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice", status: "online" },
    { id: 2, name: "Bob", status: "offline" },
    { id: 3, name: "Charlie", status: "online" },
  ]);
  const [activeContact, setActiveContact] = useState(contacts[0]);

  const handleSendMessage = () => {
    if (message) {
      const newMessages = [...messages, { text: message, sender: "You" }];
      setMessages(newMessages);
      setMessage("");
    }
  };

  const handleSelectContact = (contact) => {
    setActiveContact(contact);
    setMessages([]); // Reset messages when switching contacts
  };

  const inputSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Flex h="100vh" p={4}>
      <Box w="30%" borderRight="1px" borderColor="gray.200">
        <VStack align="stretch" spacing={4}>
          {contacts.map(contact => (
            <Button key={contact.id} variant="ghost" justifyContent="start" onClick={() => handleSelectContact(contact)}>
              {contact.name} ({contact.status})
            </Button>
          ))}
        </VStack>
      </Box>
      <Flex direction="column" p={4} w="70%" overflowY="auto">
        <VStack spacing={4} align="stretch">
          {messages.map((msg, index) => (
            <Text key={index} alignSelf={msg.sender === "You" ? "flex-end" : "flex-start"}>{msg.text}</Text>
          ))}
        </VStack>
        <Flex mt="auto" pt={4}>
          <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} size={inputSize} />
          <Button ml={2} onClick={handleSendMessage}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;