import './index.scss'
import Loader from 'react-loaders'
import TitleAnimate from './titleAnimate'
import { motion, useAnimationControls } from 'framer-motion'
import { Typewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {

    const title = "Hi, I'm Farhad".split("");
    const controls = useAnimationControls();
    
    const animate = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.3, 0.6, 1)",
                "scale3d(0.7, 1.3, 1)",
                "scale3d(1.25, 0.9, 1)",
                "scale3d(0.85, 1.05, 1)",
                "scale3d(1, 1, 1)",
              ],
              transition: {
                times: [0, 0.5, 0.7, 0.8, 0.9, 1]
              }
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

                <h1> I'm a&nbsp;
                <span style={{ fontWeight: 'bold', color: '#6c0add', fontSize: '60px' }}>
                    <Typewriter
                        words={['Student', 'Programmer', 'Embedded Software Engineer', 'Tech Enthusiast', 'Fitness Addict', 'Passionate Learner']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                    />
                </span>


                </h1>

                

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