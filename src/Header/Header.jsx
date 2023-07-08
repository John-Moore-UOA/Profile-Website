import ProfileNamespace from "./ProfileNamespace";
import TopBar from "./TopBar";
import "./headerstyles.css";
import backgroundImage from "../assets/trail-background.jpg";

function Header() {
  return (
    <>
      <TopBar />
      <div className="profile-background-img">
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
