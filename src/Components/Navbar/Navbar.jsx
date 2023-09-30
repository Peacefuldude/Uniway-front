import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css'

// Images
import logo from '../../Images/logo.png'
import close from '../../Images/close.png'
import char from '../../Images/char.png'
import travels from '../../Images/travels.png'

const Navbar = () => {

    // Hamburge menu functions
    const [active, setActive] = useState(false);
    const hamHandler = () => {
        setActive(!active);
    }

    // url check
    // const [pathIsHome, setPathIsHome] = useState(false);
    // useEffect(()=> {
    //     if (window.location.pathname === "/home") {
    //         setPathIsHome(!pathIsHome)
    //     }
    // }, [])

    return ( 
        <div className={styles.Navbar_container}>
            <img src={logo} alt="logo" />
            <div className={styles.btn_div}>
                <Link to='/profile'>
                    <button className={styles.btn_account}><img src={travels} alt="cup icon" />سفرهای من</button>
                </Link>
                <Link to='/login'>
                    <button className={styles.btn_account}><img src={char} alt="cup icon" />ورود | ثبت نام</button>
                </Link>
            </div>
            {/* <div className={styles.HanMenu} onClick={hamHandler}>
                <div className={styles.ham_btn}></div>
                <div className={styles.ham_btn}></div>
                <div className={styles.ham_btn}></div>
            </div>
            <div></div>
            <div className={active ? styles.ham_options : styles.ham_options_off}>
                <div className={styles.ham_options_div}>
                    <img onClick={hamHandler} src={close} />
                    <div></div>
                    <button className={styles.btn_nav_ham}>درباره ما</button>
                    <button className={styles.btn_nav_ham}>تماس با ما</button>
                    <div></div>
                    <button className={styles.btn_account_ham}>صفحه شخصی</button>
                    <div></div>
                </div>
            </div> */}
        </div>
     );
}
 
export default Navbar;