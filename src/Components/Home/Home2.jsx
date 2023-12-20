import React, { useContext } from 'react'
import style from '../Style/home.module.css'
import Context from '../../Context/Context'

const Home2 = () => {

    const { modeStyle } = useContext(Context)

    return (
        <div className={style.selfIntroduction} style={{ color: `${modeStyle.textColor}` }}>
            <h1 className={style.introHeader}>
                AN ECCENTRIC <span className="velvet"> INTRODUCTION </span>
            </h1>
            <p className={style.homeAboutBody} >
                We stumbled into the enchanting world of programming, where we've managed to grasp a thing or two, or so we believe… 🤷‍♂️
                <br />
                <br />Our expertise lies in the realms of
                <i>
                    <b className="velvet">C++, JavaScript, and Python</b>
                </i>
                <br />
                <br />
                Our curious minds thrive in crafting innovative &nbsp;
                <i>
                    <b className="velvet">Web Technologies and Products </b> and
                    delving into domains connected with{" "}
                    <b className="velvet">
                        Software Development.
                    </b>
                </i>
                <br />
                <br />
                Whenever the opportunity arises, we channel our passion into concocting products
                with <b className="velvet">Node.js</b> and
                <i>
                    <b className="velvet">
                        {" "}
                        Modern Javascript Libraries and Frameworks
                    </b>
                </i>
                &nbsp; such as
                <i>
                    <b className="velvet"> React.js</b>
                </i>
            </p>
        </div>
    )
}

export default Home2
