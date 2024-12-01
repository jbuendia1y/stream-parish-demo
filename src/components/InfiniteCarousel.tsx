import { Box, Stack } from "@mui/material";
import { PropsWithChildren, useEffect } from "react";
import { useSnapCarousel } from "react-snap-carousel";

interface Props extends PropsWithChildren {
  timeToChange?: number; // in seconds
}

export function InfiniteCarousel({ children, timeToChange = 2.5 }: Props) {
  const { next, scrollRef, activePageIndex, snapPointIndexes, goTo } =
    useSnapCarousel();

  const totalIndexPoints = snapPointIndexes.size - 1;
  const canNext = activePageIndex + 1 <= totalIndexPoints;

  useEffect(() => {
    const idx = setInterval(() => {
      if (canNext) next();
      else goTo(0);
    }, timeToChange * 1000);
    return () => clearInterval(idx);
  }, [canNext, goTo, next, timeToChange]);

  return (
    <Box position="relative">
      <Stack
        ref={scrollRef}
        direction="row"
        flexWrap="nowrap"
        overflow="hidden"
        maxWidth="100vw"
        width="100%"
      >
        {children}
      </Stack>
    </Box>
  );
}
