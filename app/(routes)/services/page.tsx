// import AvatarServices from "@/components/avatar-services";
// import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page"

const ServicesPage = () => {
    return(
        <>
            <TransitionPage />
            {/* <CircleImage /> */}
            {/* <AvatarServices /> */}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0 mx-auto px-4 text-center flex flex-col justify-center">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Misiones{" "}
                        <span className="font-bold text-secondary">
                            espaciales.
                        </span>
                    </h1>
                        <p className="mb-3 text-xl text-gray-300 text-justify">
                            Ofrezco servicios especializados en la creación de sitios web y aplicaciones atractivas y funcionales. 
                        </p>
                        <div className="mb-6 inline-block">
                        <a href="mailto: layclavijo10@gmail.com">
                        <button className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">Contactar con la nave</button>
                        </a>
                        </div>
                </div>

            {/* SLIDER */}
                <div className="md:ml-4">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;