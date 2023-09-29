import './index.scss'
import { motion } from 'framer-motion'
import Loader from 'react-loaders'

const Projects = () => {
    return (
        <>
        <motion.div
            className='container projects-page'
            transition={{delay: 3}}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='text'>
                <h1> Projects </h1>

                <p>
                    hi
                </p>


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

export default Projects