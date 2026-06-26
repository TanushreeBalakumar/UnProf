import Skills from "./Skills";
import About from "./About";
import ConnectButton from "./ConnectButton";

function ProfileCard({ profile }) {
  return (
    <div className="profile-container">

      <div className="profile-card">

        <img
          src="profile.jpg"
          alt="profile"
        />

        <h1>{profile.name}</h1>

        <h3>{profile.profession}</h3>

        <p>📍 {profile.location}</p>

        <Skills skills={profile.skills} />

        <About about={profile.about} />

        <ConnectButton />

      </div>

    </div>
  );
}

export default ProfileCard;