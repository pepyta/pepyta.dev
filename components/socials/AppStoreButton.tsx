import { useMemo } from "react";
import SocialButton from "./SocialButton";

const AppStoreButton = () => {
    const color = useMemo(
        () => "#ffffff",
        [],
    )

    return (
        <SocialButton color={color}>
            App Store
        </SocialButton>
    );
};

export default AppStoreButton;