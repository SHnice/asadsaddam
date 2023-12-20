import React, { useContext } from 'react'
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineLinkedin
} from "react-icons/ai";
import Context from '../../Context/Context'
import note from '../../Assets/note.png'
import style from '../Style/footer.module.css'
import DarkMode from '../DakMode/DarkMode';

import { Link } from 'react-router-dom';

const Footer = () => {

    const { modeStyle } = useContext(Context)

    return (
        <footer className={style.footer}
            style={{
                background: `${modeStyle.bgColor}`,
                color: `${modeStyle.textColor}`,
                boxShadow: `${modeStyle.mode === "light" ? "0px -1px 4px 5px rgba(35, 83, 105, 0.137)" : "0px -1px 4px 5px rgba(162, 208, 230, 0.137)"}`
            }}>
            <div className={style.footerImportant}>
            <Link to="/">
                <h3 style={{textDecoration:'none', color:"#2C7090", fontSize:'30px'}}>Asad Saddam</h3>
            </Link>

                <div className={style.copyright}>
                    <h5>Copyright&copy; 2022 AsadSaddam.</h5>
                </div>

                <div className={style.socialLinkContainer}>
                    <ul className={style.footerLinks}>
                        <li className={style.listItem}>
                            <a
                                className={style.socialLinks}
                                href="https://github.com/SHnice"
                                target='_blank'
                                style={{ color: `${modeStyle.textColor}` }}
                            >
                                <AiOutlineGithub />
                            </a>
                        </li>
                        <li className={style.listItem}>
                            <a
                                className={style.socialLinks}
                                href="#"
                                
                                style={{ color: `${modeStyle.textColor}` }}
                            >
                                <AiOutlineInstagram />
                            </a>
                        </li>
                        <li className={style.listItem}>
                            <a
                                className={style.socialLinks}
                                href="#"
                                
                                style={{ color: `${modeStyle.textColor}` }}
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className={style.listItem}>
                            <a
                                className={style.socialLinks}
                                href="#"
                                
                                style={{ color: `${modeStyle.textColor}` }}
                            >
                                <AiOutlineLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer
