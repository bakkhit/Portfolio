import Header from "../components/header"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import AboutMe from "../components/aboutMe";
import dynamic from 'next/dynamic'

const Maintenance = dynamic(() => import('../components/maintenance'), { ssr: false })

export default function Home() {
  return (
    <div className="block">
      <Maintenance />
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div >
  );
}
