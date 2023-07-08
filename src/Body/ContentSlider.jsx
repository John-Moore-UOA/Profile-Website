import picture_1 from "../assets/content/test_picture.jpg";
import Card from "./Card";

function ContentSlider() {
  let value = {
    title: "Test Title",
    description: "Test Description",
    image: picture_1,
    link: "#",
  };

  return (
    <>
      <div className="body-content-slider">
        <h1>Cool swiping content slector</h1>
        {/* {value.map((index, value) => (
          <Card
            index={index}
            title={value.title}
            description={value.description}
            image={value.image}
            link={value.link}
          />
        ))}; */}
        weird broken code to fix, must map values into react components
      </div>
    </>
  );
}

export default ContentSlider;
