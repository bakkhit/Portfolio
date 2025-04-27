import Image from "next/image";
import Link from "next/link";
import Header from "../components/header"
import AboutMe from "../components/aboutMe"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"

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
