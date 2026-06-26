import "./App.css";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profile = {
    name: "Tanushree Balakumar",
    profession: "Web Development Intern",
    location: "Chennai, Tamil Nadu",
    about:
      "Passionate web developer who enjoys building responsive websites and learning modern technologies. Excited to grow through the UnProf internship.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Responsive Design",
    ],
  };

  return (
    <>
      <Navbar />
      <ProfileCard profile={profile} />
    </>
  );
}

export default App;