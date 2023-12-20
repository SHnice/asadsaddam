import React, { useContext, useState } from 'react'
import Context from '../../Context/Context'
import style from '../Style/about.module.css'
import { ImPointRight } from "react-icons/im";

import Techstack from './Techstack';


const About = () => {

  const { modeStyle } = useContext(Context)

  return (
    <>
      <div className={style.aboutContainer} style={{ color: `${modeStyle.textColor}` }}>
        <div className={style.aboutCard}>
          <h1 className={style.aboutHeader}>
            Know Who <span className="velvet">We're</span>
          </h1>
          <p className={style.para}>
            Hi Everyone, We are <span className="velvet">Asad & Saddam  </span>
            from <span className="velvet"> SEECS, NUST.</span>
            <br />FrontEnd Web Developers
            <br />
            <br />
            Apart from coding, some other activities that We love to do!
          </p>
          <br />
          <br />
          <ul >
            <li className={style.aboutActivity}>
              <ImPointRight /> Playing Cricket
            </li>
            <li className={style.aboutActivity}>
              <ImPointRight /> Watching Movies
            </li>
            <li className={style.aboutActivity}>
              <ImPointRight /> Travelling
            </li>
          </ul>
         
          <blockquote className="velvet" style={{ textAlign: 'center', marginTop: '10px' }}>&#8212; Asad & Saddam</blockquote>
        </div>

        <Techstack />
    

      </div>
    </>
  )
}

export default About
