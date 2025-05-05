import Header from "../components/header"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import AboutMe from "../components/aboutMe";

export default function Home() {
  return (
    <div className="block">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div >
  );
}
