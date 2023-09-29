import './index.scss'
import Loader from 'react-loaders'
import { motion } from 'framer-motion'

const Home = () => {
    return  (
        <>
        <motion.div className='container1 home-page'
            transition={{delay: 3}}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='text'>
                <h1> Hi, I'm Farhad </h1>
        
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