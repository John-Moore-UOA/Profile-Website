import TopBar from "./TopBar";
import backgroundImage from "../assets/trail-background.jpg";
import ProfileNamespace from "./ProfileNamespace";
import "./headerstyles.css";

function Header() {
  return (
    <>
      {/* <TopBar /> */}
      <div className="header-background-container">
        <img
          src={backgroundImage}
          className="header-background-img"
          alt="..."
        />
      </div>
      <ProfileNamespace />
      {/* basic details like name location, studying, expected graduation, gpa? */}
    </>
  );
}

export default Header;
