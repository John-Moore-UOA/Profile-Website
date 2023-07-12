import profilePicture from "../assets/Picture thingy.jpg";
// import profilePicture from "../assets/profile-picture.jpg";

function ProfileNamespace() {
  return (
    <>
      <div className="header-namespace">
        <div className="header-namespace-img-container">
          <img src={profilePicture} className="img-thumbnail" alt="..." />
        </div>
        <div className="header-namespace-details">
          <div className="row">
            <div className="col">
              {" "}
              <p className="namespace-name">John Moore</p>
            </div>
            <div className="col"> </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="namespace-minor">Software Engineering</p>
            </div>
            <div className="col">
              <p className="namespace-minor">Expected Graduation: Nov 2025</p>
            </div>
            <div className="col">
              <p className="namespace-minor">University Of Auckland</p>
            </div>
            <div className="col">
              <p className="namespace-minor">From Tauranga, New Zealand</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNamespace;
