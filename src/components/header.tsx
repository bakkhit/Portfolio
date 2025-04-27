import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex sticky top-0 justify-self-center w-[98%] h-13 bg-gradient-to-b from-black via-black from-70% to-transparent to-100% justify-center items-center mt-2 gap-[10vw] z-10 p-10">
            <div className="w-[3vw] h-10 bg-transparent flex justify-center items-center m-5">
                <Link href="/" className="w-[100vw]"><Image width={100} height={100} src="/images/logoAHNwhite.png" alt="Profile Picture" className="rounded-full hover:scale-120 transition duration-500" /></Link>
            </div>
            <div className="flex w-[50vw] justify-between text-[1vw] justify-self-center gap-[2vw]">
                <Link href="#aboutMe" className="text-white w-fit hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-wiggle">ABOUT ME</Link>
                <Link href="#skills" className="text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-flicker">SKILLS</Link>
                <Link href="#projects" className="text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-shake">PROJECTS</Link>
            </div>
            <section className="contact flex text-[1vw] gap-[1vw]">
                <div className="border-[0.2vw] border-white rounded-full bg-transparent flex justify-center items-center m-5 p-[0.5vw] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-500 text-white">
                    <Link href="#contact">CONTACT ME</Link>
                </div>
                <div className="border-[0.2vw] border-white rounded-full bg-transparent flex justify-center items-center m-5 p-[0.5vw] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-500 text-white">
                    <Link href="/images/CVjobDating.pdf">CV</Link>
                </div>
            </section>
        </header>
        )
}