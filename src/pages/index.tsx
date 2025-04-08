import Image from "next/image";

export default function Home() {
  return (
    <div className="block">
      <header className="flex sticky top-0 justify-self-center w-[98%] h-13 bg-gradient-to-b from-black via-black from-70% to-transparent to-100% justify-center items-center mt-2 gap-50 z-10 p-10">
        <div className="w-10 h-10 bg-transparent flex justify-center items-center m-5">
          <a href="/"><img src="/images/logoAHNwhite.png" alt="Profile Picture" className="rounded-full hover:scale-120 transition duration-500" /></a>
        </div>
        <div className="flex w-[50%] justify-between text-xs ml-30">
          <a href="#aboutMe" className="text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-wiggle">ABOUT ME</a>
          <a href="#skills" className="text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-flicker">SKILLS</a>
          <a href="#projects" className="text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-shake">PROJECTS</a>
        </div>

        <div className="border-2 border-white rounded-full bg-transparent flex justify-center items-center m-5 text-xs p-2 whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-500 text-white">
          <a href="#contact">CONTACT ME</a>
        </div>
      </header>

      <div id="aboutMe" className="aboutMe flex items-center justify-center h-screen text-center p-20">
        <div className="relative w-100 overflow-hidden">
          <img src="images/khit.png" alt="khit" className="w-full" />
          <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="flex flex-col items-center justify-center ml-10 w-120">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 text-xl">Salut !</p>
          <p className="text-white max-w-2xl">
            Moi, c'est <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">Anh Hiep NGUYEN</span>, étudiant en première année de DNMADE Numérique. Passionné par le développement web, je jongle entre le code, la danse et les sessions de sport, que ce soit en salle ou en pleine nature. Fan de jeux vidéo et de musique, j’aime créer autant que découvrir de nouvelles expériences !
          </p>
        </div>
      </div>

      <div id="projects" className="flex flex-col items-center justify-center h-screen bg-black mb-20">
        <h1 className="text-5xl font-bold mb-12 text-white">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 rounded-lg w-[80%] max-w-5xl">
          <a href="https://super-simon-v1.vercel.app" target="_blank" className="w-[30%] h-[250px] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
            <img src="/images/SuperSimon.png" alt="Super Simon" className="w-full" />
            <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Super Simon</p>
            <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Workshop 1</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
          </a>
          <a href="https://github.com/bakkhit/frontend-retrobox" target="_blank" className="w-[30%] h-[250px] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
            <img src="/images/retrobox.png" alt="Super Simon" className="object-cover w-30 w-30" />
            <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">RetroBox</p>
            <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Projet de fin d'année</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
          </a>
          <a href="https://github.com/bakkhit/acproject" target="_blank" className="w-[30%] h-[250px] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
            <img src="/images/AC.png" alt="Super Simon" className="object-cover w-30 w-30" />
            <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">AC App Project</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
          </a>
          <a href="https://github.com/SachaBouk/reso" target="_blank" className="w-[30%] h-[250px] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
            <img src="/images/resoLogoWhite.png" alt="Super Simon" className="object-cover w-30 w-30" />
            <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Reso</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
          </a>
          <a href="https://github.com/nathan74490/saveyourbuddy" target="_blank" className="w-[30%] h-[250px] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
            <img src="/images/SaveYourBuddy.svg" alt="Super Simon" className="object-cover w-30 w-30" />
            <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Workshop 2</p>
            <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Save Your Buddy</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      <div id="skills" className="flex flex-col items-center justify-center h-screen py-20 hover:text cursor-default">
        <h1 className="text-5xl font-bold mb-12 text-white">Skills</h1>
        <div className="w-[80%] max-w-5xl">
          <h2 className="text-2xl mb-4 justify-self-center text-white">Langages & Frontend :</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconHtml.png" alt="HTML" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">HTML</p>
            </div>
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconCss.png" alt="CSS" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">CSS</p>
            </div>
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconJs.png" alt="JavaScript" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">JavaScript</p>
            </div>
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconVueJs.png" alt="Vue.js" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Vue.js</p>
            </div>
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconReact.png" alt="React" className="w-[98%] object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">React</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] max-w-5xl mt-12">
          <h2 className="text-2xl mb-4 justify-self-center text-white">Outils & Méthodologies :</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconGitHub.png" alt="Git" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Git</p>
            </div>
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconFigma.png" alt="Figma" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Figma</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] max-w-5xl mt-12">
          <h2 className="text-2xl mb-4 justify-self-center text-white">Backend :</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-[120px] h-[120px] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
              <img src="/images/iconNodeJs.svg" alt="Node.js" className="w-full h-full object-cover" />
              <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Node.js</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="flex flex-col items-center justify-center h-auto bg-black text-white py-16">
        <h1 className="text-5xl font-bold mb-12">Contact</h1>

        <div className="flex justify-center gap-[10%] w-full max-w-4xl px-8">
          <a href="tel:+33766254068" className="flex flex-col items-center group">
            <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
              <img src="/images/iconPhone.png" alt="Téléphone" className="w-12 h-12" />
            </div>
            <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
              07 66 25 40 68
            </p>
          </a>
          <a href="https://www.instagram.com/bak_khit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
              <img src="/images/iconInstagram.png" alt="Instagram" className="w-12 h-12" />
            </div>
            <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
              bak_khit
            </p>
          </a>
          <a href="https://www.linkedin.com/in/anh-hiep-nguyen-54a446331/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
              <img src="/images/iconLinkedin.webp" alt="LinkedIn" className="w-12 h-12" />
            </div>
            <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
              Anh Hiep Nguyen
            </p>
          </a>
          <a href="mailto:ahnkhit@gmail.com" className="flex flex-col items-center group">
            <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
              <img src="/images/iconMail.webp" alt="Email" className="w-12 h-12" />
            </div>
            <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
              ahnkhit@gmail.com
            </p>
          </a>
        </div>
      </div>



    </div >
  );
}
