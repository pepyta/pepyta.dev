import { Button, ButtonProps, useTheme } from "@mui/material";

export type SocialButtonProps = Omit<ButtonProps, "color"> & {
  color: string;
};

const SocialButton = ({ color, ...props }: SocialButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      variant={"outlined"}
      sx={{
        color,
        backgroundColor: theme.palette.background.default,
        borderColor: color,
        "&:hover": {
        borderColor: color,
        backgroundColor: color,
          color: theme.palette.getContrastText(color),
        },
      }}
      {...props}
    />
  );
};

export default SocialButton;
