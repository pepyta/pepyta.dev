import { Typography, TypographyProps } from "@mui/material";

export type GradientTypographyProps = TypographyProps & {
    gradient: [string, ...string[]];
    rotation?: string;
};

const GradientTypography = ({ gradient, rotation = "85deg", ...props }: GradientTypographyProps) => (
    <Typography
    component={"span"}
      {...props}
      sx={{
        backgroundImage: `-webkit-linear-gradient(${rotation}, ${gradient.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // WebkitAnimation: `${hue} 10s infinite linear`,
        fontFeatureSettings: "kern",
        textRendering: "optimizelegibility",
        MozOsxFontSmoothing: "grayscale",
      }}
    />
  );

export default GradientTypography;