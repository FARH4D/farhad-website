import './index.scss'
import Loader from 'react-loaders'
import TitleAnimate from './titleAnimate'
import { motion, useAnimationControls } from 'framer-motion'


const Home = () => {

    const title = "Hi, I'm Farhad".split("");
    const controls = useAnimationControls();
    
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
      };
    
    
    return  (
        <>
        <motion.div className='container1 home-page'
            transition={{delay: 3}}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='text'>
                {title.map((letter, index) => {
                    return (
                        <TitleAnimate key = {index}>
                            {letter === " " ? "\u00A0" : letter} 
                        </TitleAnimate>
                    )
                })}

                <h1> I'm a  </h1>
                <p> I am currently a third year student studying Computer Science BSc.</p>
                <p> I </p>

            </div>



        </motion.div>
        <motion.div
            transition={{delay: 0.3}}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
        >
        <Loader type = "ball-grid-pulse" style={{transform: 'scale(3'}} />
        </motion.div>
        </>
    )
}

export default Home