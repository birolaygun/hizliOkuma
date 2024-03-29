import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fab from "@mui/material/Fab";

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const TableHeader = ({ lesson, setLesson, info, setInfo }) => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        bgcolor: "rgba(0, 0, 0, 0.58)",
        color: "white",
        p: 2,
        position: "fixed",
        top: 0,
        flexWrap: "wrap",
      }}
    >
      <Button
        sx={{ m: 2 }}
        startIcon={<ReplyAllIcon />}
        fontSize="large"
        id="showMe"
        variant="contained"
        onClick={() => {
          setLesson(null);
        }}
      >
        Geri
      </Button>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <TextField
              sx={{ width: 120, m: 2 }}
              InputProps={{
                inputProps: {
                  type: "number",
                  min: 0,
                  max: 5000,
                },
                endAdornment: <InputAdornment position="end">ms</InputAdornment>,
              }}
              type={"number"}
              id="outlined-basic"
              label="Gösterim Zamanı"
              variant="outlined"
              value={info.speed}
              onChange={(e) => {
                setInfo({ ...info, speed: e.target.value });
              }}
            />
          </ThemeProvider>
        </ColorModeContext.Provider>

        <Fab
          sx={{ mr: 1 }}
          size="small"
          color="primary"
          disabled={info.speed > 9888}
          onClick={() => {
            setInfo({ ...info, speed: info.speed + 100 });
          }}
          aria-label="AddIcon"
        >
          <AddIcon />
        </Fab>
        <Fab
          size="small"
          color="primary"
          disabled={info.speed < 120}
          onClick={() => {
            setInfo({ ...info, speed: info.speed - 100 });
          }}
          aria-label="RemoveIcon"
        >
          <RemoveIcon />
        </Fab>
      </Box>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup
            sx={{ bgcolor: "rgba(0, 0, 0, 0.58)", m: 2 }}
            value={info.letters}
            exclusive
            onChange={(event, newAlignment) => {
              setInfo({ ...info, letters: newAlignment });
            }}
            aria-label="text alignment"
          >
            <ToggleButton sx={{ textTransform: "lowercase" }} value="lowercase" aria-label="left aligned">
              METİN
            </ToggleButton>
            <ToggleButton sx={{ textTransform: "capitalize" }} value="capitalize" aria-label="centered">
              Metin
            </ToggleButton>
            <ToggleButton sx={{ textTransform: "uppercase" }} value="uppercase" aria-label="right aligned">
              metin
            </ToggleButton>
          </ToggleButtonGroup>{" "}
        </ThemeProvider>
      </ColorModeContext.Provider>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <FormControlLabel
            sx={{ m: 2 }}
            control={
              <Switch
                checked={info.video}
                onChange={() => {
                  setInfo({ ...info, video: !info.video });
                }}
              />
            }
            label="Video"
          />
        </ThemeProvider>
      </ColorModeContext.Provider>

      <Stack spacing={2} direction="row">
        <Typography variant="h6"> {info.count} </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setInfo({ ...info, count: 0 });
          }}
        >
          Sıfırla
        </Button>{" "}
      </Stack>
    </Box>
  );
};

export default TableHeader;
