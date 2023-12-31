import './index.scss'
import { motion } from 'framer-motion'
import Loader from 'react-loaders'
import javaLogo from '../../assets/images/java.svg'
import sqlLogo from '../../assets/images/sql.png'
import bootstrapLogo from '../../assets/images/bootstrap.svg'
import cssLogo from '../../assets/images/css.svg'
import gitLogo from '../../assets/images/git.svg'
import htmlLogo from '../../assets/images/html.svg'
import javascriptLogo from '../../assets/images/javascript.svg'
import phpLogo from '../../assets/images/php.svg'
import postmanLogo from '../../assets/images/postman.svg'
import powerappsLogo from '../../assets/images/powerApps.png'
import powerautomateLogo from '../../assets/images/powerAutomate.png'
import pythonLogo from '../../assets/images/python.svg'
import reactLogo from '../../assets/images/react.svg'
import sassLogo from '../../assets/images/sass.svg'
import arduinoLogo from '../../assets/images/arduino.svg'
import raspberrypiLogo from '../../assets/images/raspberrypi.svg'
import ubuntuLogo from '../../assets/images/ubuntu.png'
import tensorflowLogo from '../../assets/images/tensorflow.svg'

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


                <div className='logos-row'>
                    <div className='logo'>
                        <img src={javaLogo} alt='Java' />
                        <span>Java &nbsp;&nbsp;</span>
                    </div>
                    <div className='logo'>
                        <img src={sqlLogo} alt='SQL' />
                        <span>SQL</span>
                    </div>
                    <div className='logo'>
                        <img src={javascriptLogo} alt='JavaScript' />
                        <span>JavaScript</span>
                    </div>
                    <div className='logo'>
                        <img src={htmlLogo} alt='HTML' />
                        <span>HTML</span>
                    </div>
                    <div className='logo'>
                        <img src={cssLogo} alt='CSS' />
                        <span>CSS</span>
                    </div>
                </div>

                <div className='logos-row'>
                    <div className='logo'>
                        <img src={arduinoLogo} alt='Arduino' />
                        <span>Arduino</span>
                    </div>
                    <div className='logo'>
                        <img src={bootstrapLogo} alt='Bootstrap' />
                        <span>Bootstrap&nbsp;</span>
                    </div>
                    <div className='logo'>
                        <img src={gitLogo} alt='Git' />
                        <span>Git</span>
                    </div>
                    <div className='logo'>
                        <img src={phpLogo} alt='PHP' />
                        <span>PHP</span>
                    </div>
                    <div className='logo'>
                        <img src={postmanLogo} alt='Postman' />
                        <span>Postman</span>
                    </div>
                </div>

                <div className='logos-row'>
                    <div className='logo'>
                        <img src={powerappsLogo} alt='Microsoft Power Apps' />
                        <span>Power Apps</span>
                    </div>
                    <div className='logo'>
                        <img src={powerautomateLogo} alt='Microsoft Power Automate' />
                        <span>Power Automate</span>
                    </div>
                    <div className='logo'>
                        <img src={pythonLogo} alt='Python' />
                        <span>Python</span>
                    </div>
                    <div className='logo'>
                        <img src={tensorflowLogo} alt='TensorFlow' />
                        <span>TensorFlow</span>
                    </div>
                    <div className='logo'>
                        <img src={reactLogo} alt='React' />
                        <span>React</span>
                    </div>
                </div>

                <div className='logos-row'>
                    <div className='logo'>
                        <img src={ubuntuLogo} alt='Ubuntu' />
                        <span>Ubuntu</span>
                    </div>
                    <div className='logo'>
                        <img src={raspberrypiLogo} alt='Raspberry Pi' />
                        <span>Raspberry Pi</span>
                    </div>
                    <div className='logo'>
                        <img src={sassLogo} alt='Sass' />
                        <span>Sass</span>
                    </div>
                </div>
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