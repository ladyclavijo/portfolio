"use client"

import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center md:justify-end mx-10 mb-8 md:mb-0 mt-8 md:mt-0">
                <Image src="/astronaut.png" priority width="400" height="400" alt="Profile pic" />
                </div>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Espacio de
                        <TypeAnimation

                        sequence={[
                            "creación.",
                            1000,
                            "desarrollo.",
                            1000,
                            "innovación.",
                            1000,
                            "exploración.",
                            1000
                        ]} 
                        wrapper="span"
                        speed={50}

                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Estudiante de Ingeniería Aeroespacial, Ingeniería en Computación y Programación. 
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                        href="mailto:layclavijo10@gmail.com"
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Contactar
                        </Link>

                        <a 
                        href="/CV-LadyClavijo.pdf"
                        download="CV-LadyClavijo.pdf"
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Descargar CV
                        </a>

                    </div>

                </div>
            </div>            
        </div>
    )
}

export default Introduction;