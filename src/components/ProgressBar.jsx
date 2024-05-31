import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";

const ProgressBar = ({ progress, onSeek }) => {
  return (
    <Box paddingX={4}>
      <Slider value={progress} onChange={onSeek} min={0} max={100}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default ProgressBar;