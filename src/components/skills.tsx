import Image from "next/image"

export default function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center justify-center h-[110vh] hover:text cursor-default">
            <h1 className="text-[2.5vw] font-bold mb-[1vw] text-white">Skills</h1>
            <div className="w-[80%]">
                <h2 className="text-[1.5vw] mb-4 justify-self-center text-white">Langages & Frontend :</h2>
                <div className="flex justify-center gap-[3vw] flex-wrap">
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconHtml.png" alt="HTML" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">HTML</p>
                    </div>
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconCss.png" alt="CSS" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">CSS</p>
                    </div>
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconJs.png" alt="JavaScript" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">JavaScript</p>
                    </div>
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconVueJs.png" alt="Vue.js" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Vue.js</p>
                    </div>
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconReact.png" alt="React" className="w-[98%] object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">React</p>
                    </div>
                </div>
            </div>

            <div className="w-[80%] max-w-5xl mt-[2vw]">
                <h2 className="text-[1.5vw] mb-4 justify-self-center text-white">Outils & Méthodologies :</h2>
                <div className="flex justify-center gap-[3vw] flex-wrap">
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconGitHub.png" alt="Git" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Git</p>
                    </div>
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconFigma.png" alt="Figma" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Figma</p>
                    </div>
                </div>
            </div>

            <div className="w-[80%] max-w-5xl mt-[2vw]">
                <h2 className="text-[1.5vw] mb-4 justify-self-center text-white">Backend :</h2>
                <div className="flex justify-center gap-[3vw] flex-wrap">
                    <div className="w-[7vw] h-[7vw] bg-white p-4 flex justify-center items-center rounded-xl group relative overflow-hidden">
                        <Image layout="responsive" width={100} height={100} src="/images/iconNodeJs.svg" alt="Node.js" className="w-full h-full object-cover" />
                        <p className="absolute bottom-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">Node.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}