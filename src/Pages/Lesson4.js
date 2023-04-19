import React, { useEffect, useState } from "react";
import random from "simple-random-number-generator";
import Button from "@mui/material/Button";
import { Box, Card, Typography } from "@mui/material";
import { fourLetters, alphabet } from "../data";
import TableHeader from "./Components/TableHeader";

const Lesson1 = ({ lesson, setLesson, info, setInfo }) => {
  const [randomLetter, setRandomLetter] = useState("");
  const [seen, setSeen] = useState([]);
  const [show, setShow] = useState(false);

  let params = {
    min: 0,
    max: fourLetters.length,
  };

  const giveRandomLetter = () => {
    setInfo({ ...info, count: info.count + 1 });

    let letter = fourLetters[Number(random(params)).toFixed(0)];
    if (seen.includes(letter)) {
      giveRandomLetter();
    } else {
      setRandomLetter(letter || "");
      setShow(true);
    }
  };

  useEffect(() => {
    giveRandomLetter();
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
            {String(randomLetter || "")}
          </Typography>
        </Card>
      </Box>
      <Box>
        <Button
          fontSize="large"
          variant="contained"
          onClick={() => {
            giveRandomLetter();
          }}
        >
          Göster
        </Button>
      </Box>
    </Box>
  );
};

export default Lesson1;
