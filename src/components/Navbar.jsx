import { Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding={4} bg="brand.800" color="white">
      <Heading as="h1" size="md">Music Player</Heading>
    </Flex>
  );
};

export default Navbar;