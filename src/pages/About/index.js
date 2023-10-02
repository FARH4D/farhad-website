import './index.scss'
import { motion } from 'framer-motion'
import Loader from 'react-loaders'
import javaLogo from '../logos/java.svg'
import sqlLogo from '../logos/sql.png'
import bootstrapLogo from '../logos/bootstrap.svg'
import cssLogo from '../logos/css.svg'
import gitLogo from '../logos/git.svg'
import htmlLogo from '../logos/html.svg'
import javascriptLogo from '../logos/javascript.svg'
import phpLogo from '../logos/php.svg'
import postmanLogo from '../logos/postman.svg'
import powerappsLogo from '../logos/powerApps.png'
import powerautomateLogo from '../logos/powerAutomate.png'
import pythonLogo from '../logos/python.svg'
import reactLogo from '../logos/react.svg'
import sassLogo from '../logos/sass.svg'

const AboutMe = () => {
    return (
        <>
        <motion.div
            className='container3 about-page'
            transition={{delay: 3}}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='text'>
                <h1> About Me </h1>

                <p>
                    I'm currently a third year student studying Computer Science BSc. Programming has been a passion of mine
                    since I was young, which has translated into me working on personal projects in my own time, both for fun and 
                    for practical use to make my life easier.
                </p>

                <h1> Skills </h1>

                <p>
                    Over the years I've been programming, I've accumulated a wide range of skills in many different programming languages and technologies.
                </p>


                <img src={javaLogo}></img> <img src={sqlLogo} style={{width: '96px', height: '50px', marginBottom: '10px'}}></img>
                

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

export default AboutMe