import React, { useEffect, useState } from "react";
import random from "simple-random-number-generator";
import Button from "@mui/material/Button";
import { Box, Card, Typography } from "@mui/material";
import { sesli, sessiz } from "../data";
import TableHeader from "./Components/TableHeader";

const Lesson1 = ({ lesson, setLesson, info, setInfo }) => {
  const [randomLetter, setRandomLetter] = useState("");
  const [seen, setSeen] = useState([]);
  const [show, setShow] = useState(false);
  const [firstLetter1, setfirstLetter1] = useState(false);
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");

  let paramsSesli = {
    min: 0,
    max: sesli.length,
  };

  let paramsSessiz = {
    min: 0,
    max: sessiz.length,
  };

  const give = () => {
    let randoms = Number(random(paramsSesli)).toFixed(0);
    if (randoms > 4) {
      setfirstLetter1(true);
    } else {
      setfirstLetter1(false);
    }

    setLetter1(sesli[Number(random(paramsSesli)).toFixed(0)]);
    setLetter2(sessiz[Number(random(paramsSessiz)).toFixed(0)]);

    if (firstLetter1) {
      setRandomLetter(String(letter1 || "" + letter2 || ""));
    } else {
      setRandomLetter(String(letter2 || "" + letter1 || ""));
    }
    setShow(true);
  };

  useEffect(() => {
    give();
  }, []);

  useEffect(() => {
    if (show === true) {
      setTimeout(() => {
        setShow(false);
      }, info.speed);
    }
  }, [show]);

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {" "}
      <TableHeader info={info} setInfo={setInfo} lesson={lesson} setLesson={setLesson} />
      <Box>
        <Card sx={{ width: 250, m: 3, boxShadow: 6, bgcolor: "rgba(255, 255, 255, 0.7)" }}>
          <Typography
            sx={{
              visibility: !show && "hidden",
              textAlign: "center",
              fontSize: 50,
              p: 4,
              textTransform: info.letters,
            }}
            variant="body1"
          >
            {randomLetter || ""}
          </Typography>
        </Card>
      </Box>
      <Box>
        <Button
          fontSize="large"
          variant="contained"
          onClick={() => {
            give();
          }}
        >
          Göster
        </Button>
      </Box>
    </Box>
  );
};

export default Lesson1;
