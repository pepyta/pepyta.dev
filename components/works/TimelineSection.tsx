import { Box, Grid, Typography, useTheme } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";

const TIMELINE_WIDTH = 64;
const CIRCLE_SIZE = 28;
const SPACING = 1.5;

export type TimelineSectionProps = PropsWithChildren<{
  title: string;
  from: Date;
  to?: Date;
}>;


const TimelineSection = ({
  children,
  title,
  from,
  to,
}: TimelineSectionProps) => {
  const theme = useTheme();
  const color = useMemo(
    () => theme.palette.mode === "dark" ? "#ffffff": "#000000",
    [theme.palette.mode],
  );

  return (
    <Box
      sx={{
        [theme.breakpoints.up("lg")]: {
          marginLeft: `${-TIMELINE_WIDTH}px`,
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            paddingLeft: "0 !important",
            width: TIMELINE_WIDTH,
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
            textAlign: "center",
            alignItems: "center",
          }}
        >
            <Box sx={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, borderRadius: "50%", background: color, margin: "auto" }} />

            <Box sx={{ width: 4, borderRadius: 1, height: `calc(100% - ${theme.spacing(SPACING)} - ${CIRCLE_SIZE}px)`, background: color, margin: "auto", mt: SPACING }} />
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <Typography variant={"h5"}>
            {title}
          </Typography>
          <Typography gutterBottom>
            {from.toLocaleDateString()} -{" "}
            {to ? to.toLocaleDateString() : "present"}
          </Typography>

          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimelineSection;
