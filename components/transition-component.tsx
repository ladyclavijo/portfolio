"use client"

import { fadeIn } from "@/utils/motion-transition"
import { motion } from "framer-motion"

interface MotionTransitionProps {
    children: React.ReactNode
    position: "right" | "bottom"  //siempre ligado a motion-transition
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => { 
    const { children, position, className } = props

    return (
        <motion.div
            variants={fadeIn(position)} 
            initial="hidden"       
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default MotionTransition; //motiontrasnition es un componente reactivo, 
                                 //listo para utilizar en cualquier sitio de la app ;)