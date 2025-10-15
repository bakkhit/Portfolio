import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex w-full h-[10vw] items-center px-[2vw] bg-linear-to-b from-black via-black to-transparent top-0 sticky z-50 text-[1vw] font-bold">
            <div className="flex w-[20%] justify-start">
                <Link href="/" className="w-[100vw]">
                    <Image
                        width={100}
                        height={100}
                        src="/images/logoAHNwhite.png"
                        alt="Profile Picture"
                        className="hover:scale-120 transition duration-500 w-[8vw]"
                    />
                </Link>
            </div>

            <section className="headerLink flex w-[60%] h-fit text-[1vw] gap-[1vw] place-content-between">
                <Link
                    href="#aboutMe"
                    className="aboutMeText text-center  text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-wiggle"
                >
                    ABOUT ME
                </Link>
                <Link
                    href="#skills"
                    className="skillsText text-center text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-flicker"
                >
                    SKILLS
                </Link>
                <Link
                    href="#projects"
                    className="projectsText text-center text-white hover:text-gray-500 transition duration-500 hover:scale-110 hover:animate-shake"
                >
                    PROJECTS
                </Link>
            </section>

            <section className="headerContact flex w-[20%] place-content-end text-[1vw] gap-[0.5vw] h-fit">
                <div className="contactText border-[0.2vw] border-white rounded-full bg-transparent flex justify-center items-center p-[0.5vw] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-500 text-white">
                    <Link href="#contact">CONTACT ME</Link>
                </div>
                <div className="cvText border-[0.2vw] border-white rounded-full bg-transparent flex justify-center items-center p-[0.5vw] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-500 text-white">
                    <Link href="/images/khitCV.pdf" target="blank">CV</Link>
                </div>
            </section>
        </header>
    )
} 