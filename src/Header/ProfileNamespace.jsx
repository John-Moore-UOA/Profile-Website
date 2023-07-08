import profilePicture from "../assets/profile-picture.jpg";

function ProfileNamespace() {
  return (
    <>
      <div className="header-namespace">
        <div className="row align-items-start">
          <div className="col g-0">
            <img src={profilePicture} className="img-thumbnail" alt="..." />
          </div>
          <div className="col g-0">
            <div className="header-namespace-details">
              <h1>John</h1>
              <p>Tauranga Engineering Software 2025 etc...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNamespace;
