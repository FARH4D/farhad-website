import React from 'react';
import './index.scss';
import { motion } from 'framer-motion';
import Loader from 'react-loaders';
import projectBackground from '../../assets/images/background.jpg';

const Projects = () => {
  return (
    <>
      <motion.div
        className='container2 projects-page'
        transition={{ delay: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='header-container'>
          <h1>Projects</h1>
        </div>

        <div className='projectTable'>
            <div className='projectRow'>
                <div className='projectContainer1'>
                    <img src={projectBackground} />
                </div>
                <div className='projectContainer2'></div>
            </div>
            <div className='projectRow'>
                <div className='projectContainer1'></div>
                <div className='projectContainer2'></div>
            </div>
        </div>

      </motion.div>

      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Loader type='ball-grid-pulse' style={{ transform: 'scale(3)' }} />
      </motion.div>
    </>
  );
};

export default Projects;
