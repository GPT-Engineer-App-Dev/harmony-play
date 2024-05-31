import { Container, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";
import PlayerControls from "../components/PlayerControls";
import ProgressBar from "../components/ProgressBar";

const Index = () => {
  const dummySongs = [
    { id: 1, title: "Song One", artist: "Artist One" },
    { id: 2, title: "Song Two", artist: "Artist Two" },
    { id: 3, title: "Song Three", artist: "Artist Three" },
  ];

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <Navbar />
      <VStack spacing={4} width="100%">
        <SongList songs={dummySongs} />
        <PlayerControls />
        <ProgressBar />
      </VStack>
    </Container>
  );
};

export default Index;