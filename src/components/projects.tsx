import Image from "next/image"
import Link from "next/link"

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center h-[100vh] w-full bg-black justify-self-center">
            <h1 className="text-[2.5vw] font-bold mb-12 text-white">Projects</h1>
            <div className="flex flex-wrap justify-center gap-8 rounded-lg w-[80vw]">
                <Link href="https://super-simon-v1.vercel.app" target="_blank" className="w-[20vw] h-[15vw] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
                    <Image layout="responsive" width={100} height={100} src="/images/SuperSimon.png" alt="Super Simon" className="w-[90%]" />
                    <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Super Simon</p>
                    <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Workshop 1</p>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <Link href="https://github.com/bakkhit/frontend-retrobox" target="_blank" className="w-[20vw] h-[15vw] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
                    <Image width={100} height={100} src="/images/retrobox.png" alt="Super Simon" className="object-cover w-[60%]" />
                    <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">RetroBox</p>
                    <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Projet de fin {`d'année`}</p>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <Link href="https://github.com/bakkhit/acproject" target="_blank" className="w-[20vw] h-[15vw] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
                    <Image width={100} height={100} src="/images/AC.png" alt="Super Simon" className="object-cover w-[50%]" />
                    <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">AC App Project</p>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <Link href="https://github.com/SachaBouk/reso" target="_blank" className="w-[20vw] h-[15vw] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
                    <Image width={100} height={100} src="/images/resoLogoWhite.png" alt="Super Simon" className="object-cover w-[60%]" />
                    <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Reso</p>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <Link href="https://github.com/nathan74490/saveyourbuddy" target="_blank" className="w-[20vw] h-[15vw] bg-black flex justify-center items-center rounded-lg text-white text-xl group relative overflow-hidden border-2 border-white">
                    <Image width={100} height={100} src="/images/SaveYourBuddy.svg" alt="Super Simon" className="object-cover w-[60%]" />
                    <p className="absolute top-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> Workshop 2</p>
                    <p className="absolute bottom-2 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Save Your Buddy</p>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
            </div>
        </div>
    )
}