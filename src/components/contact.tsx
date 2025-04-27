import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center justify-center h-auto bg-black text-white py-16">
            <h1 className="text-5xl font-bold mb-12">Contact</h1>

            <div className="flex justify-center gap-[10%] w-full max-w-4xl px-8">
                <Link href="tel:+33766254068" className="flex flex-col items-center group">
                    <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconPhone.png" alt="Téléphone" className="w-12 h-12" />
                    </div>
                    <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        07 66 25 40 68
                    </p>
                </Link>
                <Link href="https://www.instagram.com/bak_khit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconInstagram.png" alt="Instagram" className="w-12 h-12" />
                    </div>
                    <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        bak_khit
                    </p>
                </Link>
                <Link href="https://www.linkedin.com/in/anh-hiep-nguyen-54a446331/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconLinkedin.webp" alt="LinkedIn" className="w-12 h-12" />
                    </div>
                    <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        Anh Hiep Nguyen
                    </p>
                </Link>
                <Link href="mailto:ahnkhit@gmail.com" className="flex flex-col items-center group">
                    <div className="w-[130px] h-[130px] bg-white flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                        <Image width={100} height={100} src="/images/iconMail.webp" alt="Email" className="w-12 h-12" />
                    </div>
                    <p className="mt-3 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                        ahnkhit@gmail.com
                    </p>
                </Link>
            </div>
        </div>
    )
}