import Image from "next/image"

export default function AboutMe() {
    return (
        <div  id="aboutMe" className="aboutMe flex items-center justify-center text-center h-[110vh]">
            <div className="relative w-150 overflow-hidden">
                <Image layout="responsive" width={100} height={100} src="/images/khit.png" alt="khit" className="khitAM" />
                <div className="khitShadow absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="textAM flex flex-col items-center justify-center w-[50vw] h-fit">
                <p className="salut text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 text-[2vw]">Salut !</p>
                <p className="textAm text-white max-w-2xl text-[1vw]">
                    {`Moi, c'est`} <span className="textAm2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-purple-500 text-[1vw]">Anh Hiep NGUYEN</span>, étudiant en première année de DNMADE Numérique. Passionné par le développement web, je jongle entre le code, la danse et les sessions de sport, que ce soit en salle ou en pleine nature. Fan de jeux vidéo et de musique, j’aime créer autant que découvrir de nouvelles expériences !
                </p>
            </div>
        </div>
    )
}