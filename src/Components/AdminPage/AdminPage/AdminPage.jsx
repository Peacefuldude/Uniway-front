import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Images
import empty from '../../../Images/empty-folder.png'

// Styles
import styles from './AdminPage.module.css'

const Buses = () => {

    const Navigate = useNavigate();

    useEffect(()=> {
        if (!localStorage.getItem('admin')) {
            Navigate('/home')
        }
    }, [])

    return ( 
        <div className={styles.container}>
            <section>
                <button className={styles.section_btn}><Link to="/adminprofile">پروفایل ادمین</Link></button>
                <button className={styles.section_btn}><Link to="/adminlist">لیست ادمین ها</Link></button>
                <button className={styles.section_btn}><Link to="/payments">لیست پرداختی ها</Link></button>
                <button className={styles.section_btn}><Link to="/admingetusers">لیست کاربرها</Link></button>
                <button className={styles.section_btn}><Link to="/createbus">ثبت اتوبوس جدید</Link></button>
                <button className={styles.section_btn}><Link to="/buses">لیست اتوبوس ها</Link></button>
                <button className={styles.section_btn}><Link to="/createtravel">ایجاد سفر جدید</Link></button>
                <button className={styles.section_btn}><Link to="/travellist">لیست سفرها</Link></button>
            </section>
            <main>
                <div>
                    <p>چیزی برای نمایش وجود ندارد</p>
                    <img src={empty} alt="nothing here to see" />
                </div>
            </main>
        </div>
     );
}
 
export default Buses;