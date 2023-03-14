import { Container, Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import AppStoreButton from "../socials/AppStoreButton";
import TimelineSection from "./TimelineSection";

const MotivappFamilySection = () => {
  return (
    <Container maxWidth={"md"}>
    <TimelineSection
        title={"MotivApp Family"}
        from={new Date("2023/01/01")}
    >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <AppStoreButton />
          </Grid>
        </Grid>
    </TimelineSection>
      </Container>
  );
};

export default MotivappFamilySection;
