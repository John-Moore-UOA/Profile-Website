import SideBar from "./SideBar";
import ContentSlider from "./ContentSlider";

function Body() {
  return (
    <>
      <div className="body-content text-center">
        <div className="row align-items-start">
          <div className="col g-0">
            <SideBar />
          </div>
          <div className="col g-0">
            <ContentSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
