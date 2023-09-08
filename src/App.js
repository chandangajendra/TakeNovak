import './App.css';
import Carousel from './components/Carousel';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// importing all the images 
import rat_park from "./assets/rat_park.jpg";
import non_pro from "./assets/the_non_pro.jpg";
import take_fountain from "./assets/take_fountain.jpg";
import freaks_of from "./assets/freaks_of_the_industry.jpg";
import rat_audio from "./assets/rat_park_audio_book.jpg"
import excerpts from "./assets/excerpts.png";
import podcast from "./assets/podcast.png";
import park_shirt from "./assets/rat_park_shirt.png";
import adam_novak from "./assets/adam_novak.jpg";
import { right_0, right_1, right_2, right_3, right_4 } from './data/RightData';
import { createRef } from 'react';

function App() {
  const imgData = [rat_park, non_pro, take_fountain, freaks_of, rat_audio, excerpts, podcast, park_shirt, adam_novak];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />, // this is exceptionl element
      children: [
        {
          path: "/",
          name: "ratPark",
          element: <Carousel img={imgData[0]} para={right_0[0]} link={right_0[1]} cssr={"rem"} />,
          nodeRef: createRef(),
        },
        {
          path: "/non_pro",
          name: "non_pro",
          element: <Carousel img={imgData[1]} para={right_1[0]} link={right_1[1]} cssr={"rem"} />,
          nodeRef: createRef(),
        },
        {
          path: "/take_fountain",
          element: <Carousel img={imgData[2]} para={right_2[0]} link={right_2[1]} cssr={"rem"} />,
        },
        {
          path: "/freaks_of",
          element: <Carousel img={imgData[3]} para={right_3[0]} link={right_3[1]} cssr={"rem"} />,
        },
        {
          path: "/rat_audio",
          element: <Carousel img={imgData[4]} para={right_4[0]} link={right_4[1]} cssr={"rem"} />,
        },
        {
          path: "/excerpts",
          element: <Carousel img={imgData[5]} para={right_4[0]} link={right_4[1]} css={"rem"} />,
        },
        {
          path: "/podcast",
          element: <Carousel img={imgData[6]} dblock={"dblock"} cssr={"rem"} css={"rem"} />,
        },
        {
          path: "/park_shirt",
          element: <Carousel img={imgData[7]} pvisible={"dblock"} cssr={"rem"} css={"rem"} />,
        },
        {
          path: "/adam_novak",
          element: <Carousel img={imgData[8]} p9visible={"dblock"} cssr={"rem"} css={"rem"} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
