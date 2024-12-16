import "./InfiniteTextPreview.css";
import { Typography, TypographyProps } from "@mui/material";

interface Props extends Omit<TypographyProps, "ref"> {
  component: "h1" | "h2" | "p";
}

export function InfiniteTextPreview({ children, sx, ...props }: Props) {
  return (
    <Typography
      {...props}
      sx={{
        ...sx,
        width: "max-content",
        animation: "infinite-scroll 20s linear infinite",
      }}
    >
      {children}
    </Typography>
  );
}
