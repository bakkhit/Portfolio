import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center justify-center bg-black text-white pb-10">
            <h1 className="text-[2.5vw] font-bold mb-[5vw]">Contact</h1>

            <div className="flex justify-center gap-[10%] w-full max-w-4xl px-8">
                <Link href="tel:+33766254068" className="flex flex-col items-center group">
                    <div className="w-[10vw] h-[10vw] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconPhone.png" alt="Téléphone" className="object-cover w-[5vw]" />
                    </div>
                    <p className="mt-[1vw] text-[1vw] opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        07 66 25 40 68
                    </p>
                </Link>
                <Link href="https://www.instagram.com/bak_khit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-[10vw] h-[10vw] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconInstagram.png" alt="Instagram" className="object-cover w-[5vw]" />
                    </div>
                    <p className="mt-[1vw] text-[1vw] opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        bak_khit
                    </p>
                </Link>
                <Link href="https://www.linkedin.com/in/anh-hiep-nguyen-54a446331/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-[10vw] h-[10vw] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconLinkedin.webp" alt="LinkedIn" className="object-cover w-[5vw]" />
                    </div>
                    <p className="mt-[1vw] text-[1vw] opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        Anh Hiep Nguyen
                    </p>
                </Link>
                <Link href="mailto:ahnkhit@gmail.com" className="flex flex-col items-center group">
                    <div className="w-[10vw] h-[10vw] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconMail.webp" alt="Email" className="object-cover w-[5vw]" />
                    </div>
                    <p className="mt-[1vw] text-[1vw] opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        ahnkhit@gmail.com
                    </p>
                </Link>
            </div>
        </div>
    )
}