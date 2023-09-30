import React, { useState } from "react";

// Styles
import styles from './ProfilePage.module.css'

// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Info from "./Info/Info";
import ActiveTravel from "./ActiveTravel/ActiveTravel";

// Images
import avatar from '../../Images/avatar.png'
import char from '../../Images/profchar.png'
import travels from '../../Images/proftravels.png'

const ProfilePage = () => {

    // Stylers for buttons
    const [infoActive, setInfoActive] = useState(true);
 
    return ( 
        <div className={styles.ProfilePage_Container}>
            <section className={styles.Navbar_section}>
                <  Navbar/>
            </section>
            <section className={styles.Profile_section}>
                <div className={styles.right_div}>
                    <img src={avatar} alt="profile pic" className={styles.profilepic_img}/>
                    <p className={styles.username_p}>نام کاربری</p>
                    <button className={infoActive ? styles.profile_info_btn : styles.btn_disable} onClick={()=> {setInfoActive(true)}}><img src={char} alt="cup icon" />اطلاعات حساب کاربری</button>
                    <button className={infoActive ? styles.btn_disable : styles.profile_info_btn} onClick={()=> {setInfoActive(false)}}><img src={travels} alt="cup icon" />سفرهای من</button>
                </div>
                <div className={styles.left_div}>
                    <section className={infoActive ? styles.sec_active : styles.sec_deactive}>
                        < Info />
                    </section>
                    <section className={infoActive ? styles.sec_deactive : styles.sec_active}>
                        < ActiveTravel />
                    </section>
                </div>
            </section>
            <section className={styles.Footer_section}>
                <  Footer/>
            </section>
        </div>
     );
}
 
export default ProfilePage;