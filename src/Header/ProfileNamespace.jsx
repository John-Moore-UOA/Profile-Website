import profilePicture from "../assets/profile-picture.jpg";

function ProfileNamespace() {
  return (
    <>
      <div className="header-namespace">
        <div className="row align-items-start">
          <div className="col g-0">
            <div className="header-namespace-img-container">
              <img src={profilePicture} className="img-thumbnail" alt="..." />
            </div>
          </div>
          <div className="col g-0">
            <div className="header-namespace-details">
              <div className="row">
                <div className="col">
                  {" "}
                  <p className="namespace-name">John Moore</p>
                </div>
                <div className="col">
                  {" "}
                  <p className="namespace-major">
                    Bachelor Of Software Engineering at the University of
                    Auckland
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="namespace-minor">Tauranga, New Zealand</p>
                </div>
                <div className="col">
                  <p className="namespace-minor">
                    Expected Graduation: Nov 2025
                  </p>
                </div>
                <div className="col">
                  <p className="namespace-minor">placeholder</p>
                </div>
                <div className="col">
                  <p className="namespace-minor">placeholder</p>
                </div>
                <div className="col">
                  <p className="namespace-minor">placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNamespace;
