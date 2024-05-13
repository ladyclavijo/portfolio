import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                        <span>Toda mi</span>{" "}
                        <span className="font-bold text-secondary">trayectoria profesional</span>
                    </h1>
                </div>

                <div className="flex justify-center w-full">
                    <CounterServices />
                </div>

                <TimeLine />
                <Avatar />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;