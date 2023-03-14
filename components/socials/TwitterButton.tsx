import { Twitter as TwitterIcon } from "@mui/icons-material";
import SocialButton from "./SocialButton";

const TwitterButton = () => {
  return (
    <SocialButton color={"#1DA1F2"} startIcon={<TwitterIcon />}>
      Twitter
    </SocialButton>
  );
};

export default TwitterButton;
