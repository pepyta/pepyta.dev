import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import GithubButton from "../socials/GithubButton";
import GradientTypography from "./GradientTypography";
import LinkedInButton from "../socials/LinkedInButton";
import TwitterButton from "../socials/TwitterButton";
import Link from "next/link";

const IntroSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Container maxWidth={"md"} sx={{ mt: 8, mb: 8 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant={"h3"}>
            <Trans
              i18nKey={"title"}
              components={{
                gradient: (
                    <GradientTypography
                        variant={"h3"}
                        gradient={[theme.palette.primary.dark, theme.palette.secondary.dark]}
                    />
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom>{t("description")}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={1}>
                <Grid item>
                  <Link href={"https://github.com/pepyta"} style={{ textDecoration: "none" }}>
                    <GithubButton />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={"https://www.linkedin.com/in/pepyta/"} style={{ textDecoration: "none" }}>
                    <LinkedInButton />
                    </Link>
                </Grid>
                {/* 
                <Grid item>
                    <TwitterButton />
                </Grid>
                */}
            </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroSection;
