import { useState } from "react";

import picture_1 from "../assets/content/test_picture.jpg";
import bf_img from "../assets/content/bfwebsite.png";
import mandleBrot from "../assets/profile-picture.jpg";
import assignment3_img from "../assets/content/assignment3image.png";
import mazeMania_img from "../assets/content/mazemaniawebsite.png";
import chess_img from "../assets/content/chesswebsite.png";

import Card from "./Card";

function ContentSlider() {
  let value1 = {
    title: "Bf Code Compiler",
    description:
      "Compiler for the Theoretical Language of Bf.  This language is essentially manual Turing machine.  The link below has a more detailed description of the language",
    image: bf_img,
    link: "https://github.com/John-Moore-UOA/BF-compiler",
  };

  let value2 = {
    title: "MandleBrot Set in raw C",
    description:
      "Developed a Graphical pixel drawing application to then render the MandelBrot Set as a bitmap",
    image: mandleBrot,
    link: false,
  };

  let value3 = {
    title: "MazeMania",
    description:
      "An old school maze traversal game with applying a maze generation algorithm",
    image: mazeMania_img,
    link: "https://github.com/John-Moore-UOA/Personal/tree/main/MazeMania-master",
  };

  let value5 = {
    title: "Discrete Math Calculator",
    description:
      "Discrete Math Assignment 3 Graph Theory Calculator, with Depth and Breadth First Search",
    image: assignment3_img,
    link: "https://github.com/John-Moore-UOA/University-Projects/tree/main/assignment-3-John-Moore-UOA-main",
  };

  let value4 = {
    title: "Chess",
    description: "A simple C project I made to learn C a number of years ago",
    image: chess_img,
    link: "https://github.com/John-Moore-UOA/Personal/tree/main/Chess",
  };

  let value6 = {
    title: "Temp butterfly Photo",
    description:
      "I have an interest in Photography, this is a photo I took, as a placeholder image",
    image: picture_1,
    link: false,
  };

  const [index, setIndex] = useState(0);
  let values = [value1, value2, value3, value4, value5, value6];

  const onClick = (isNext) => {
    console.log("clicked");
    if (isNext) {
      setIndex((index + 1) % values.length);
      console.log("next : " + index);
    } else {
      setIndex((index - 1 + values.length) % values.length);
      console.log("previous : " + index);
    }
  };

  return (
    <>
      <div className="body-content-slider">
        <h1>Projects</h1>
        <div className="body-content-grid">
          <div
            className="display-previous"
            type="button"
            onClick={() => onClick(false)}
          >
            {index + 1} out of {values.length}
          </div>
          <Card cardProps={values[index]} />
          <div
            className="display-next"
            type="button"
            onClick={() => onClick(true)}
          >
            {index + 1} out of {values.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSlider;

// {value.map((index, value) => (
//   ))}
//   ; weird broken code to fix, must map values into react components
