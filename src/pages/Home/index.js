import './index.scss'
import Loader from 'react-loaders'
import { motion } from 'framer-motion'

const Home = () => {
    return  (
        <>
        <motion.div className='home-container'
            transition={{delay: 2}}
            initial= {{opacity: 0, y: 20}}
            animate = {{opacity: 1, y: 20}}
            exit={{opacity: 0, y: 20}}
        >
            <div className='text'>
                <h1> Hello, welcome to my website. </h1>
        
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