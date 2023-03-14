"use client";

import IntroSection from "@/components/intro/IntroSection";
import MotivappFamilySection from "@/components/works/MotivappFamilySection";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container sx={{ height: "calc(100%)" }} alignItems={"center"}>
      <Grid item xs={12}>
        <IntroSection />
      </Grid>
    </Grid>
  );
}
