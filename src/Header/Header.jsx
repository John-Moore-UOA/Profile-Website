import ProfileNamespace from "./ProfileNamespace";
import TopBar from "./TopBar";

function Header() {
  return (
    <>
      <TopBar />
      <div className="profile-background-img"></div>
      <ProfileNamespace />
      {/* basic details like name location, studying, expected graduation, gpa? */}
    </>
  );
}

export default Header;
