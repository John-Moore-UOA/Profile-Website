import { useState } from "react";

import picture_1 from "../assets/content/test_picture.jpg";
import picture_2 from "../assets/profile-picture.jpg";

import Card from "./Card";

function ContentSlider() {
  let value1 = {
    title: "One",
    description: "Test Description 1",
    image: picture_1,
    link: "#",
  };

  let value2 = {
    title: "Two",
    description: "Test Description 2",
    image: picture_2,
    link: "#",
  };

  let value3 = {
    title: "Three",
    description: "Test Description 3",
    image: picture_1,
    link: "#",
  };

  const [index, setIndex] = useState(0);
  let values = [value1, value2, value3];

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
        <h1>Cool swiping content slector</h1>
        <Card cardProps={values[index]} />
        <div
          className="display-previous"
          type="button"
          onClick={() => onClick(false)}
        >
          Back
        </div>
        <div
          className="display-next"
          type="button"
          onClick={() => onClick(true)}
        >
          Next
        </div>
      </div>
    </>
  );
}

export default ContentSlider;

// {value.map((index, value) => (
//   ))}
//   ; weird broken code to fix, must map values into react components
