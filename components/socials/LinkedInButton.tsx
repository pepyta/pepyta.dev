import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import SocialButton from "./SocialButton";

const LinkedInButton = () => {
    return (
        <SocialButton color={"#0077B5"} startIcon={<LinkedInIcon />}>
            LinkedIn
        </SocialButton>
    );
};

export default LinkedInButton;