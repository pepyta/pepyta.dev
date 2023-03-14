import { Button, ButtonProps, useTheme } from "@mui/material";
import { useMemo } from "react";
import { GitHub as GithubIcon } from "@mui/icons-material";
import SocialButton from "./SocialButton";

const GithubButton = (props: ButtonProps) => {
  const theme = useTheme();
  const color = useMemo(
    () => (theme.palette.mode === "dark" ? "#ffffff" : "#000000"),
    [theme.palette.mode]
  );

  return (
    <SocialButton color={color} startIcon={<GithubIcon />}>
      GitHub
    </SocialButton>
  );
};

export default GithubButton;
