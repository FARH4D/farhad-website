import './index.scss'
import Loader from 'react-loaders'
import TitleAnimate from './titleAnimate'
import { motion, useAnimationControls } from 'framer-motion'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { MdEmail } from 'react-icons/md'


const Home = () => {

    const title = "Hi, I'm Farhad".split("");

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
                        words={['Programmer', 'Student', 'Tech Enthusiast', 'Fitness Addict', 'Aspiring Software Engineer ', 'Passionate Learner']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                    />
                </span>
                </h1>
            </div>
            
            <a href='mailto:Farhad.Ahmedd@hotmail.com' target='_blank' className='contactButton' style={{textDecoration:'none'}}>
                <div>
                <p> Contact me!&nbsp;</p> <MdEmail style={{ fontSize: '50px'}} />
                </div>
            </a>
            

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