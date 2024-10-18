import VideoCarousel from "./components/VideoCarousel";
import "./App.scss";
import { Video } from "./types";

const videos: Video[] = [
  { id: 1, src: "/1.mp4", title: "Whispers of Ipsum" },
  { id: 3, src: "/3.mp4", title: "Lorem Ipsum in the Wilderness" },
  { id: 4, src: "/4.mp4", title: "The Ipsum Tide" },
  { id: 5, src: "/5.mp4", title: "Forest of Lorem Ipsum" },
  { id: 6, src: "/6.mp4", title: "The Ipsum Tide" },
  { id: 7, src: "/7.mp4", title: "Echoes of Ip" },
  { id: 8, src: "/8.mp4", title: "The Ipsum Tide" },
  { id: 9, src: "/9.mp4", title: "Echoes of Ip" },
  { id: 10, src: "/10.mp4", title: "The Ipsum Tide" },
  { id: 11, src: "/11.mp4", title: "Echoes of Ip" },
  { id: 12, src: "/12.mp4", title: "The Ipsum Tide" },
  { id: 13, src: "/13.mp4", title: "Echoes of Ip" },
  { id: 14, src: "/14.mp4", title: "The Ipsum Tide" },
  { id: 15, src: "/15.mp4", title: "Echoes of Ip" },
];

function App() {
  return (
    <div className="App">
      <VideoCarousel videos={videos} title="A day in the life" />
    </div>
  );
}

export default App;
