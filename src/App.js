import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Footer from "./Pages/Components/Footer";
import Lesson1 from "./Pages/Lesson1";
import Lesson2 from "./Pages/Lesson2";
import Lesson3 from "./Pages/Lesson3";
import Lesson4 from "./Pages/Lesson4";
import Main from "./Pages/Main";

function App() {
  const [lesson, setLesson] = useState(null);
  const [count, setCount] = useState(0);

  const [info, setInfo] = useState({
    speed: 100,
    letters: "lowercase", //lowercase, uppercase, capitalize
    video: true,
    count: 0,
  });
  const videoRef = useRef();

  useEffect(() => {
    if (info.video) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [info.video]);

  return (
    <Box
      className="App"
      sx={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {lesson === null && <Main lesson={lesson} setLesson={setLesson} />}
      {lesson === null && <Footer lesson={lesson} setLesson={setLesson} />}

      {lesson === "1" && <Lesson1 info={info} setInfo={setInfo} lesson={lesson} setLesson={setLesson} />}
      {lesson === "2" && <Lesson2 info={info} setInfo={setInfo} lesson={lesson} setLesson={setLesson} />}
      {lesson === "3" && <Lesson3 info={info} setInfo={setInfo} lesson={lesson} setLesson={setLesson} />}
      {lesson === "4" && <Lesson4 info={info} setInfo={setInfo} lesson={lesson} setLesson={setLesson} />}
      <video
        ref={videoRef}
        // style={{ display: !info.video && "none" }}
        autoPlay
        muted
        loop
        src="/Images/bgVideo.mp4"
      ></video>
    </Box>
  );
}

export default App;
