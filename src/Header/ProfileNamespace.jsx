import profilePicture from "../assets/profile-picture.jpg";

function ProfileNamespace() {
  return (
    <>
      <div className="header-namespace">
        <img src={profilePicture} class="img-thumbnail" alt="..." />
        <h1>John</h1>
        <p>Tauranga Engineering Software 2025 etc...</p>
      </div>
    </>
  );
}

export default ProfileNamespace;
