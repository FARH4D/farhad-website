import React from 'react';
import './index.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import projectBackground from '../../assets/images/background.jpg';
import { AiFillGithub } from 'react-icons/ai';
import TitleAnimate from '../titleAnimate';

const Projects = () => {
  const title = "Projects".split("");
  return (
    <>
      <motion.div
        className='container2 projects-page'
        transition={{ delay: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='projectTitle'>
                {title.map((letter, index) => {
                    return (
                        <TitleAnimate key = {index}>
                            {letter === " " ? "\u00A0" : letter} 
                        </TitleAnimate>
                    )
                })}
        </div>
        


        <div className='projectTable'>
            <div className='projectRow'>
                <div className='projectContainer1'>
                    <div className='img-container'>
                      <img src={projectBackground} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className='text-container'>
                      <h1> Rpi Assistant </h1>
                      <p> An application written in Python created for my Raspberry pi 4 to simplify tasks 
                        in my room. </p>           
                      <div className='github-icon-wrapper'>
                        <Link to="https://github.com/FARH4D/rpiAssistant" className='github-link'>
                          <AiFillGithub className='github-icon' />
                        </Link>
                      </div>
                  </div>
                </div>
                <div className='projectContainer2'>
                    <div className='img-container'>
                      <img src={projectBackground} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className='text-container'>
                      <h1> Timesheet Submission Website </h1>
                      <p> A website written in PHP, Bootstrap and Javascript for users to submit or approve timesheets. Uses SQL 
                        to store all data. </p>
                      <div className='github-icon-wrapper'>
                      <Link to="https://github.com/FARH4D/timesheetPortal" className='github-link'>
                        <AiFillGithub className='github-icon' />
                      </Link>
                      </div>
                    </div>
                </div>
            </div>
            <div className='projectRow'>
                <div className='projectContainer1'>
                    <div className='img-container'>
                      <img src={projectBackground} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className='text-container'>
                      <h1> Mellow X </h1>
                      <p> A simple website hosted on an arduino yun that obtains data from modules and updates the webserver. </p>
                      <div className='github-icon-wrapper'>
                        <Link to="https://github.com/FARH4D/MellowX" className='github-link'>
                          <AiFillGithub className='github-icon' />
                        </Link>
                      </div>
                  </div>
                </div>
                <div className='projectContainer2'>
                    <div className='img-container'>
                      <img src={projectBackground} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className='text-container'>
                      <h1> Java Banking System </h1>
                      <p> A CLI banking system written in Java that stores data in text files. Can view, add, delete or update data from 
                        within the program. 
                      </p>
                      <p> (Still in development) </p>
                      <div className='github-icon-wrapper'>
                      <Link to="https://github.com/FARH4D" className='github-link'>
                        <AiFillGithub className='github-icon' />
                      </Link>
                    </div>
                  </div>
                </div>
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
