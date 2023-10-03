import { motion, useAnimationControls } from "framer-motion"
import { useState } from "react";

const TitleAnimate = ({children}) => {

    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const animate = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, 0.55, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.25, 0.85, 1)",
                "scale3d(0.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
              ]
        })
        setIsPlaying(true)
      };

    return(
        <motion.span
            animate = {controls}
            onMouseOver={() => {
                if (!isPlaying)
                    animate() 
            }}
            onAnimationComplete={() => setIsPlaying(false)}
            style={{display: 'inline-block', fontSize: '100px'}}
        >
            {children}
        </motion.span>
    )
}

export default TitleAnimate;