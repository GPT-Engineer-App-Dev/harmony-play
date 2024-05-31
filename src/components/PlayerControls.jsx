import { Flex, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaVolumeDown, FaVolumeUp } from "react-icons/fa";

const PlayerControls = ({ isPlaying, onPlayPause, onSkipForward, onVolumeChange, volume }) => {
  return (
    <Flex align="center" justify="space-between" padding={4}>
      <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={onPlayPause} />
      <IconButton aria-label="Skip Forward" icon={<FaStepForward />} onClick={onSkipForward} />
      <Flex align="center">
        <IconButton aria-label="Volume Down" icon={<FaVolumeDown />} />
        <Slider defaultValue={volume} onChange={onVolumeChange} min={0} max={100}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <IconButton aria-label="Volume Up" icon={<FaVolumeUp />} />
      </Flex>
    </Flex>
  );
};

export default PlayerControls;