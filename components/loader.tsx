import Image from "next/image"

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-darkBg z-50">
            <Image src="/rocket.gif" alt="Loader Icon" className="w-16 h-16 animate-spin" />
        </div>
    );
}

export default Loader;