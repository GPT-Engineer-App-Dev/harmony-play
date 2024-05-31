import { Box, Text, VStack } from "@chakra-ui/react";

const SongList = ({ songs }) => {
  return (
    <VStack spacing={4} align="stretch">
      {songs.map((song, index) => (
        <Box key={index} p={4} bg="gray.100" borderRadius="md">
          <Text>{song.title}</Text>
          <Text fontSize="sm" color="gray.500">{song.artist}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default SongList;